from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.order import Order
from app.utils.auth import get_current_user

router = APIRouter(prefix="/orders", tags=["Orders"])

@router.get("/my")
def my_orders(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return db.query(Order).filter(Order.user_id == user["user_id"]).all()
