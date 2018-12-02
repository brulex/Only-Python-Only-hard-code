from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Lessons
from .serializers import LessonsSerializer

# Create your tests here.
# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_lesson(title="", content=""):
        if title != "" and content != "":
            Lessons.objects.create(title=title, content=content)

    def setUp(self):
        # add test data
        self.create_lesson("Возможности языка python", "первый урок, начало")
        self.create_lesson("Загрузка и установка Python", "второй урок, начало")
        self.create_lesson("Первая программа. Знакомство со средой разработки IDLE", "третий урок, начало")
        self.create_lesson("Синтаксис", "четвертый урок, начало")


class GetAllLessonsTest(BaseViewTest):

    def test_get_all_lessons(self):
        """
        This test ensures that all songs added in the setUp method
        exist when we make a GET request to the lessons/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("lessons-all")
        )
        # fetch the data from db
        expected = Lessons.objects.all()
        serialized = LessonsSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
