# Generated by Django 3.0.7 on 2020-06-27 19:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0006_custompokemon_evolution_form'),
    ]

    operations = [
        migrations.AlterField(
            model_name='custompokemon',
            name='trainer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Тренер'),
        ),
    ]
