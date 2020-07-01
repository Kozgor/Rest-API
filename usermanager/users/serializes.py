from rest_framework import serializers
from .models import CustomPokemon

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomPokemon
        fields = '__all__'
