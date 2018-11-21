import {Component, OnInit} from '@angular/core';
import {MainService} from "../services/main.service";
import {Lessons} from "../models/lessons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessonsList: Lessons[];

  constructor(private mainService: MainService,
              private router: Router) {
  }

  ngOnInit() {
    let a = this.mainService.getLossonsData();
    this.lessonsList = [];
    a.forEach(element => {
      this.lessonsList.push
      ({
        title: element.title,
        lesson_id: element.lesson_id
      });
    });
  }

  goLesson(lesson_id: string) {
    this.router.navigate(['/lesson' , lesson_id ]);
  }
}
