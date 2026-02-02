from sqlalchemy import Column, String, Integer, Float, DateTime
from app.database import Base
import uuid
from datetime import datetime

class Cart(Base):
    __tablename__="cart"

    id=Column(String,primary_key=True,default=lambda:str(uuid.uuid4()))
    user_id=Column(String)
    product_id=Column(String)
    quantity=Column(Integer)

