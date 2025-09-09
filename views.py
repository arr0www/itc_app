from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
def landing_page(request):
    return render(request, 'landing.html')

def dashboard(request):
    return HttpResponse("This is the dashboard")
