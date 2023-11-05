from django.db import models


PIZZA_SIZE = (
    ('26', '26'),
    ('30', '30'),
    ('40', '40')
)

PIZZA_TYPES = (
    ('thin', 'thin'),
    ('traditional', 'traditional')
)

PIZZA_RATING = (
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
    ('6', '6'),
    ('7', '7'),
    ('8', '8'),
    ('9', '9'),
    ('10', '10')
)


class Categorie(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self) -> str:
        return self.name

class PizzaPrice(models.Model):
    price = models.FloatField(default=4.55)

    def __str__(self) -> str:
        return str(self.price)
    
    class Meta:
        ordering = ['price']

class PizzaSize(models.Model):
    size = models.IntegerField()

    def __str__(self) -> str:
        return self.size

class Pizza(models.Model):
    name = models.CharField(max_length=60)
    imageUrl = models.CharField(max_length=150)
    category = models.ForeignKey(Categorie, on_delete=models.CASCADE)
    rating = models.CharField(max_length=2, choices=PIZZA_RATING, default=1)
    sizes = models.ManyToManyField(PizzaSize, blank=True, default=26)
    prices = models.ManyToManyField(PizzaPrice, blank=True, default=5)

    def __str__(self) -> str:
        return self.name

class PizzaOrder(models.Model):
    pizza = models.ForeignKey(Pizza, on_delete=models.PROTECT)
    type = models.CharField(max_length=20, choices=PIZZA_TYPES)
    size = models.CharField(max_length=2, choices=PIZZA_SIZE)
    paid_status = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.id
