from ninja import NinjaAPI
from api.auth.views import router as auth_router
from api.email_api.views import router as email_router

api = NinjaAPI()
api.add_router("/", auth_router)
api.add_router("/email", email_router)
