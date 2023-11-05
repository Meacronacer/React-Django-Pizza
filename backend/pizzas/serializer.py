from rest_framework import serializers
from .models import *

class PizzaSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')
    sizes = serializers.SlugRelatedField(many=True, read_only=True, slug_field='size')
    prices = serializers.SlugRelatedField(many=True, read_only=True, slug_field='price')
    
    class Meta:
        model = Pizza
        fields = "__all__"