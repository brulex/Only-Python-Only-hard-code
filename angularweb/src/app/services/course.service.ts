import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCoursesList(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/courses/');
  }

  getCourseInfo(course_id: string) {
    return this.http.get<any>('http://127.0.0.1:8000/api/course/' + course_id + '/');
  }

  getCourseContent(course_id: string) {
    return this.http.get<any>('http://127.0.0.1:8000/api/courses/' + course_id + '/');
  }

  getCourseLessonContent(course_id: string, content_id: string): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/courses/' + course_id + '/' + content_id);
  }

  getQuestionList(course_id: number): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/questions/' + course_id + '/');
  }

  checkAnswer(question_id: number, answer_id: number): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/questions/check/' + question_id + '/' + answer_id + '/');
  }


}
