from rest_framework import generics
from .models import Lessons
from .serializers import LessonsSerializer, LessonSerializer


# Create your views here.


class ListLessonsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    serializer_class = LessonsSerializer
    queryset = Lessons.objects.all()


class SingleLessonView(generics.ListAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):
        id = self.kwargs.get('id')
        return Lessons.objects.filter(id=id)
