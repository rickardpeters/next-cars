from django.urls import path
from .views import cars, car

urlpatterns = [
    path("cars/", cars, name="cars"),
    path("cars/<str:car_id>", car, name="car"),
]
