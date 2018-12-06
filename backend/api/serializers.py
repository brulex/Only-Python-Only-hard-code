from rest_framework import serializers
from .models import Lessons, Courses


class LessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ("id", "title")


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ("title", "content")


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ("id", "name")
