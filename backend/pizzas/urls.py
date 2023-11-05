from rest_framework import routers
from .views import *
from django.urls import path


urlpatterns = [
    path('pizzas/', PizzasList.as_view())
]