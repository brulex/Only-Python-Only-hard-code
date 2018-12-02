from django.db import models

# Create your models here.


class Lessons(models.Model):
    # Lesson title
    title = models.CharField(max_length=255, null=False)
    # Lesson content
    content = models.TextField(null=False)

    def __str__(self):
        return "{} - {}".format(self.title, self.content)
