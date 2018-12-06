import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../services/lesson.service";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css', '../app.component.css']
})
export class LessonComponent implements OnInit {
  title: string;
  lessonPage: string;
  content_id: string;
  comment_id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonService
  ) {
  }

  ngOnInit() {
    this.content_id = this.activatedRoute.snapshot.paramMap.get('content_id');
    this.lessonService.getLessonContent(this.content_id).subscribe(value => {
      console.log(this.lessonPage = value[0].content);
      this.title = value[0].title;
      this.lessonPage = value[0].content;
      this.comment_id = value[0].comment_id;
    }, error => {
      alert(JSON.parse(error));
    });
  }
}
