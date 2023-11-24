from django.db import models



PIZZA_TYPES = (
    ('thin', 'thin'),
    ('traditional', 'traditional')
)

PIZZA_RATING = (
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9)
)


class Categorie(models.Model):
    name = models.CharField(max_length=60, default=[0])

    def __str__(self) -> str:
        return self.name

class PizzaPrice(models.Model):
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self) -> str:
        return str(self.price)
    
    class Meta:
        ordering = ['price']

class PizzaSize(models.Model):
    size = models.IntegerField()

    class Meta:
        ordering = ['size']

    def __str__(self) -> str:
        return str(self.size)

class Pizza(models.Model):
    name = models.CharField(max_length=60)
    imageUrl = models.CharField(max_length=150)
    category = models.ForeignKey(Categorie, default=1, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=PIZZA_RATING, default=1)
    sizes = models.ManyToManyField(PizzaSize, blank=True, default=[0])
    prices = models.ManyToManyField(PizzaPrice, blank=True, default=[0])


    def __str__(self) -> str:
        return self.name

class PizzaOrder(models.Model):
    name = models.CharField(max_length=90, blank=True)
    pizzas = models.JSONField(default=dict)
    phone_number = models.CharField(max_length=15, blank=True)
    total = models.FloatField(blank=True, default=0)
    order_type = models.CharField(max_length=25, blank=True)
    address = models.TextField(max_length=200, blank=True, null=True)
    paid_status = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return str(self.name)
    
