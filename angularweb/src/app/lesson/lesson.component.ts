import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lesson_id: string;
  lessonPage: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.lesson_id = this.activatedRoute.snapshot.paramMap.get('lesson_id');
    this.lessonPage = this.mainService.getLesson(this.lesson_id);
  }

}
