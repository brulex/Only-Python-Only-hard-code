import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) {
  }

  getLossonsList(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/lessons/');
  }

  getLessonContent(content_id: string): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/lessons/' + content_id + '/');
  }
}
