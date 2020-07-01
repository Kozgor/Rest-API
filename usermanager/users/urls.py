from rest_framework import routers
from .api import PokemonsViewSet

router = routers.DefaultRouter()

router.register('api/pokemons', PokemonsViewSet, 'IT-step pokemons collection')

urlpatterns = router.urls