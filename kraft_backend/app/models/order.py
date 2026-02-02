from sqlalchemy import Column, String, Integer, Float, DateTime
from app.database import Base
import uuid
from datetime import datetime

class Order(Base):
    __tablename__="orders"

    id=Column(String,primary_key=True,default=lambda:str(uuid.uuid4()))
    user_id=Column(String)
    total_amount=Column(Float)
    payment_status=Column(String)
    order_status = Column(String, default="PAID")
    created_at = Column(DateTime, default=datetime.utcnow)
