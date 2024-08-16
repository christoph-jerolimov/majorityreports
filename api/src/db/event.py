from datetime import datetime
import uuid
from sqlmodel import (
    Field,
    SQLModel,
    UniqueConstraint,
    JSON,
    Relationship,
)
from sqlalchemy import Column, DateTime, func
from typing import Dict, Optional
from .namespace import Namespace
from .actor import Actor
from .item import Item


class Event(SQLModel, table=True):
    __table_args__ = (
        UniqueConstraint(
            "namespace_name", "name", name="event_name_is_unique_in_namespace"
        ),
    )

    uid: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    namespace_name: str = Field(foreign_key="namespace.name")
    namespace: Namespace = Relationship()
    name: str = Field()
    actor_name: Optional[str] = Field(foreign_key="actor.name")
    actor: Optional[Actor] = Relationship()
    item_name: Optional[str] = Field(foreign_key="item.name")
    item: Optional[Item] = Relationship()
    creationTimestamp: Optional[datetime] = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        ),
    )
    updateTimestamp: Optional[datetime] = Field(
        sa_column=Column(DateTime(timezone=True), onupdate=func.now(), nullable=True),
    )
    deletedTimestamp: Optional[datetime] = Field(
        sa_column=Column(DateTime(timezone=True), nullable=True),
    )
    labels: Dict[str, str] = Field(default={}, sa_type=JSON)
    annotations: Dict[str, str] = Field(default={}, sa_type=JSON)
    type: Optional[str] = Field(nullable=True)
    value: Optional[str] = Field(nullable=True)
    # count: int = Field(default=0) ???
