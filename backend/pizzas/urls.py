
from .views import *
from django.urls import path


urlpatterns = [
    path('orders/', PizzaOrder.as_view()),
    path('pizzas/', PizzasList.as_view()),
]