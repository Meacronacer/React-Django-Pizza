# Generated by Django 4.2.7 on 2023-11-05 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzas', '0003_pizzaprice_remove_pizza_price_alter_pizza_sizes_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='pizzaprice',
            options={'ordering': ['price']},
        ),
        migrations.AlterField(
            model_name='pizzasize',
            name='size',
            field=models.IntegerField(),
        ),
    ]
