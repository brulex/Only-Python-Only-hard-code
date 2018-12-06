import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCoursesList() {
    return this.http.get<any>('http://127.0.0.1:8000/api/courses/');
  }

  getCourseContent(course_id: string) {
    return this.http.get<any>('http://127.0.0.1:8000/api/courses/' + course_id + '/');
  }

  getCourseLessonContent(course_id: string, content_id: string) {
    return this.http.get<any>('http://127.0.0.1:8000/api/courses/' + course_id + '/' + content_id);
  }

}
