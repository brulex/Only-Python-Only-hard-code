from rest_framework import generics
from .models import Lessons, Courses
from .serializers import LessonsSerializer, LessonSerializer, CoursesSerializer


# Create your views here.


class ListLessonsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    serializer_class = LessonsSerializer
    queryset = Lessons.objects.all()


class SingleLessonViewByLessonId(generics.ListAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):
        id = self.kwargs.get('lesson_id')
        return Lessons.objects.filter(id=id)


class SingleLessonViewByCourseId(generics.ListAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        return Lessons.objects.filter(course_id=course_id)


class ListCoursesView(generics.ListAPIView):

    serializer_class = CoursesSerializer
    queryset = Courses.objects.all()
