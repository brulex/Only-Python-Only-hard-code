from rest_framework import serializers
from .models import Lessons


class LessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ("id", "title")


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ("title", "content")
