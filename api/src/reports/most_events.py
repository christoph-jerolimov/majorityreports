import uuid
from fastapi import APIRouter, Depends
from sqlmodel import SQLModel, Session, select, func, and_, desc
from typing import Iterable, Dict

from ..db import get_session
from ..items import Item
from ..events import Event


router = APIRouter()


class ItemWithEventCount(SQLModel):
    uid: uuid.UUID
    namespace_name: str
    name: str
    labels: Dict[str, str]
    annotations: Dict[str, str]
    count: int


@router.get("/items")
def get_items_with_most_events(
    namespace_name: str | None = None,
    type_filter: str | None = None,
    limit: int = 10,
    session: Session = Depends(get_session),
) -> Iterable[ItemWithEventCount]:
    statement = select(
        Item.uid,
        Item.namespace_name,
        Item.name,
        Item.labels,
        Item.annotations,
    ).select_from(Item)

    statement = statement.add_columns(func.count(Event.name).label("count"))
    statement = statement.join(
        Event,
        and_(
            Item.name == Event.item_name,
            Item.namespace_name == Event.namespace_name,
        ),
        isouter=True,
    )
    statement = statement.group_by(Item.uid)
    statement = statement.order_by(desc("count"))

    if namespace_name is not None:
        statement = statement.where(Item.namespace_name == namespace_name)

    if type_filter is not None:
        statement = statement.where(Event.type == type_filter)

    statement = statement.limit(limit)

    return session.exec(statement).all()
