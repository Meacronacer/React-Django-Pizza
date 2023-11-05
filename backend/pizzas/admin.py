from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Pizza)
admin.site.register(PizzaOrder)
admin.site.register(Categorie)
admin.site.register(PizzaSize)
admin.site.register(PizzaPrice)
