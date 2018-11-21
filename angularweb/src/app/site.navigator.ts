import {LessonService} from "./services/lesson.service";
import {Router} from "@angular/router";

export class SiteNavigator {

  constructor(private router: Router){}

  goLesson(content_id: string) {
    this.router.navigate(['/lesson', content_id]);
  }

  goCourse(content_id: string) {
    this.router.navigate(['/course', content_id]);
  }
}
