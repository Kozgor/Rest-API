from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

class CustomPokemon(models.Model): 
    pokemon_name = models.CharField(verbose_name="Покемон", max_length = 200, unique=True)
    residence = models.CharField(verbose_name="Де знайти",max_length = 200)
    description = models.CharField(verbose_name="Опис",max_length = 600)
    catched_up_in = models.DateTimeField(auto_now_add = True)
    pokemon_types = (
        (1, 'Nature'),
        (2, 'Water'),
        (3, 'Fire'),
        (4, 'Electricity'),
        (5, 'Earth'),
        (6, 'Air'),
        (7, 'Telecinesis'),
        (8, 'Darkness'),
        (9, 'Light'),
        (10, 'Ice'),
        (11, 'Cosmic'),
        (12, 'Time')
    )
    evolution_forms = (
        (0, 'non evolving pokemon'),
        (1, '1'),
        (2, '2'),
        (3, '3')
    )
    pokemon_type = models.IntegerField(verbose_name="Тип покемона", choices=pokemon_types)
    evolution_form = models.IntegerField(verbose_name="Форма еволюції", choices=evolution_forms)
    trainer = models.ForeignKey(User, verbose_name="Тренер", on_delete=models.CASCADE)