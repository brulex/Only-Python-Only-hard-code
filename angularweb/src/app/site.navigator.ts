import {Router} from '@angular/router';

export class SiteNavigator {

  constructor(private router: Router) {
  }

  goLesson(content_id: number) {
    this.router.navigate(['/lesson', content_id]);
  }

  goCourse(course_id: number, name: string) {
    this.router.navigate(['/course', course_id], {queryParams: {name: name}});
  }

  goCourseLesson(course_id: number, content_id: number) {
    this.router.navigate(['/course/', course_id, content_id]);
  }

  goQuestions(course_id: number) {
    this.router.navigate(['/course/questions/', course_id,]);
  }
}
