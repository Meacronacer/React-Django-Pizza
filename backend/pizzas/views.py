from rest_framework import generics
from .serializer import *
from .models import *
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.permissions import AllowAny
from django.db.models import Min

class PizzasList(generics.ListAPIView):
    queryset = Pizza.objects.annotate(by_price=Min('prices__price'))
    serializer_class = PizzaSerializer
    pagination_class = PageNumberPagination
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]

    filterset_fields = ['category']
    ordering_fields = ['rating', 'name', 'by_price']
    search_fields = ['name']


class PizzaOrder(generics.CreateAPIView, generics.ListAPIView):
    queryset = PizzaOrder.objects.all()
    serializer_class = PizzaOrderSerializer
    permission_classes = [AllowAny]
    