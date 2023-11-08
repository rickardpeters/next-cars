from django.db import models


class Car(models.Model):
    id = models.CharField(primary_key=True, unique=True, max_length=6)
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    img = models.CharField(max_length=255, blank=True, default="")

    def __str__(self):
        return self.make + " " + self.model
