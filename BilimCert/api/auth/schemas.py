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
    recaptcha_token: str

class LoginSchema(BaseModel):
    username: str
    password: str
