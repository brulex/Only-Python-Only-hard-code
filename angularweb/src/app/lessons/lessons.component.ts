import {Component, OnInit} from '@angular/core';
import {Content} from "../models/content";
import {Router} from "@angular/router";
import {LessonService} from "../services/lesson.service";
import {SiteNavigator} from "../site.navigator";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css', '../app.component.css']
})
export class LessonsComponent implements OnInit {
  lessonsList: Content[];
  siteNavigator: SiteNavigator;

  constructor(private lessonService: LessonService,
              private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.lessonsList = [];
  }

  ngOnInit() {
    this.lessonService.getLossonsData().subscribe(response => {
        response.forEach(element => {
          this.lessonsList.push
          ({
            title: element.title,
            content_id: element.id
          });
        });
      },
      error => {
        alert(error);
      });
  }
}
