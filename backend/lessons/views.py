from rest_framework import generics
from .models import Lessons
from .serializers import LessonsSerializer

# Create your views here.


class ListLessonsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer
