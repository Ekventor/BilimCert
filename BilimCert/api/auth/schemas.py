from pydantic import BaseModel, EmailStr
from typing import Optional

class RegisterSchema(BaseModel):
    username: str
    first_name: str
    last_name: str
    email: EmailStr
    sex: int
    phone: str
    password: str
    auth: Optional[bool] = False

class LoginSchema(BaseModel):
    username: str
    password: str
