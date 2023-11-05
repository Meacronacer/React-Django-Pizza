from django.shortcuts import render
from rest_framework import generics
from .serializer import PizzaSerializer
from .models import *

class PizzasList(generics.ListAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
