from django.contrib import admin
from django.db import models
from django_json_widget.widgets import JSONEditorWidget
from .models import *
# Register your models here.

admin.site.register(Pizza)
admin.site.register(Categorie)
admin.site.register(PizzaSize)
admin.site.register(PizzaPrice)


@admin.register(PizzaOrder)
class PizzaOrderAdmin(admin.ModelAdmin):
    readonly_fields = ['total']
    list_display = ['total']
    formfield_overrides = {
        # fields.JSONField: {'widget': JSONEditorWidget}, # if django < 3.1
        models.JSONField: {'widget': JSONEditorWidget},
    }

