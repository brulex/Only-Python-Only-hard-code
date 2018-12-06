import {Router} from "@angular/router";

export class SiteNavigator {

  constructor(private router: Router){}

  goLesson(content_id: string) {
    this.router.navigate(['/lesson', content_id]);
  }

  goCourse(course_id: string) {
    this.router.navigate(['/course', course_id]);
  }
  goCourseLesson(course_id: string, content_id: string) {
    this.router.navigate(['/course/'+ course_id, content_id, ]);
  }
}
