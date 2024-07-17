from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse
from sqlmodel import Field, SQLModel, Session, select
from typing import Optional, Iterable
from .db import get_session


class Feedback(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    done: Optional[bool] = Field(default=False)


router = APIRouter()


@router.post("")
def create_feedback(
    newFeedback: Feedback, session: Session = Depends(get_session)
) -> Feedback:
    feedback = Feedback()
    feedback.name = newFeedback.name
    if isinstance(newFeedback.done, bool):
        feedback.done = newFeedback.done
    session.add(feedback)
    session.commit()
    session.refresh(feedback)
    return feedback


@router.get("")
def get_feedbacks(session: Session = Depends(get_session)) -> Iterable[Feedback]:
    statement = select(Feedback)
    return session.exec(statement).all()


@router.get("/{feedback_id}")
def get_feedback_by_feedback_id(
    feedback_id: int, session: Session = Depends(get_session)
) -> Feedback:
    feedback = session.get_one(Feedback, feedback_id)
    return feedback


@router.put("/{feedback_id}")
def update_feedback_by_feedback_id(
    feedback_id: int, updateFeedback: Feedback, session: Session = Depends(get_session)
) -> Feedback:
    feedback = session.get_one(Feedback, feedback_id)
    if name := updateFeedback.name:
        feedback.name = name
    if done := updateFeedback.done:
        feedback.done = done
    session.commit()
    session.refresh(feedback)
    return feedback


@router.delete("/{feedback_id}")
def delete_feedback_by_feedback_id(
    feedback_id: int, session: Session = Depends(get_session)
) -> JSONResponse:
    # or how can we run a delete query directly?
    feedback = session.get_one(Feedback, feedback_id)
    session.delete(feedback)
    session.commit()
    return JSONResponse(
        status_code=status.HTTP_202_ACCEPTED, content={"message": "Feedback deleted"}
    )
