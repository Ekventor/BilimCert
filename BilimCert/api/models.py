from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from asgiref.sync import sync_to_async
# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, username ,first_name, last_name, email, phone, sex, password=None,
                    role=0) -> AbstractBaseUser:
                    
        if not first_name and not last_name:
            raise TypeError("Users must have a first name and last name.")
        if not email:
            raise TypeError("Users must have an email address.")

        user = self.model(
            username=username,
            first_name=first_name,
            last_name=last_name,
            email=self.normalize_email(email),
            phone=phone,
            sex=sex,
            role=role
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, first_name, last_name, email, phone, sex, password=None,
                      role=0) -> AbstractBaseUser:
        if not password:
            raise TypeError("Superusers must have a password.")

        user = self.create_user(first_name, last_name, email, phone, sex, password,
                            role=1)
        user.save()
        return user

    async def acreate_user(self, *args, **kwargs):
        return await sync_to_async(self.create_user)(*args, **kwargs)

    async def acreate_superuser(self, *args, **kwargs):
        return await sync_to_async(self.create_superuser)(*args, **kwargs)

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=128, unique=True, primary_key=True, db_index=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=32, unique=True)
    sex = models.SmallIntegerField(default=0)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    role = models.SmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["first_name", "last_name", "email"]

    objects = UserManager()

    def __str__(self) -> str:
        return str(self.email)
    
    def serialize(self) -> dict:
        return {
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email,
            "phone": self.phone,
            "sex": self.sex,
            "address": self.address,
            "isStaff": self.is_staff,
            "isActive": self.is_active,
            "role": self.role,
            "created_by_administrator": self.created_by_administrator
        }

    def get_full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self) -> str:
        return self.first_name