import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../services/lesson.service";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css', '../app.component.css']
})
export class LessonComponent implements OnInit {
  content_id: string;
  lessonPage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonService
  ) {
  }

  ngOnInit() {
    this.content_id = this.activatedRoute.snapshot.paramMap.get('content_id');
    this.lessonPage = this.lessonService.getLessonContent(this.content_id);
  }

}
