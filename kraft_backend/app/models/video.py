from sqlalchemy import Column, String, Integer, Float, DateTime
from sqlalchemy.dialects.postgresql import ARRAY
from app.database import Base
import uuid
from datetime import datetime

class Video(Base):
    __tablename__="videos"

    id=Column(String,primary_key=True,default=lambda:str(uuid.uuid4()))
    title=Column(ARRAY(String))
    video_url=Column(String)