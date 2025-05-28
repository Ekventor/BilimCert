from ninja import NinjaAPI
from api.auth.views import router as auth_router

api = NinjaAPI()
api.add_router("/", auth_router)
