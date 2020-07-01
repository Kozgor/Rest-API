from .models import CustomPokemon
from rest_framework import viewsets
from .serializes import CustomUserSerializer

class PokemonsViewSet(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomPokemon.objects.all()