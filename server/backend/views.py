from django.views.decorators.csrf import csrf_exempt
from .models import Car
from .serializers import CarSerializer
from django.http import HttpResponse, JsonResponse
import json


@csrf_exempt
def cars(request):
    if request.method == "GET":
        cars = Car.objects.all()
        if not cars:
            return HttpResponse("No cars could be found.")

        serialized_data = CarSerializer(cars, many=True)

        return JsonResponse(serialized_data.data, safe=False)

    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))

        id = data["id"]
        make = data["make"]
        model = data["model"]
        img = data["img"]

        if Car.objects.filter(id=id):
            return HttpResponse("A car with that ID already exists.")

        new_car = Car.objects.create(id=id, make=make, model=model, img=img)

        serialized_data = CarSerializer(new_car)

        return JsonResponse(serialized_data.data, safe=False)


@csrf_exempt
def car(request, car_id):
    if request.method == "GET":
        car = Car.objects.get(id=car_id)

        if not car:
            return HttpResponse("A car with that ID could not be found.")

        serialized_data = CarSerializer(car)

        return JsonResponse(serialized_data.data, safe=False)

    if request.method == "DELETE":
        car = Car.objects.filter(id=car_id).first()

        if not car:
            return HttpResponse("A car with that ID could not be found.")

        serialized_data = CarSerializer(car)
        car.delete()

        return JsonResponse(serialized_data.data, safe=False)

    if request.method == "PUT":
        car = Car.objects.filter(id=car_id)

        if not car:
            return HttpResponse("A car with that ID could not be found.", status=404)

        data = json.loads(request.body.decode("utf-8"))

        car.update(**data)

        updated_car = Car.objects.get(id=car_id)

        serialized_data = CarSerializer(updated_car)

        return JsonResponse(serialized_data.data, safe=False)
