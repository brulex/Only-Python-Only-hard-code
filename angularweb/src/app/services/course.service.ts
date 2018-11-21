import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCoursesData() {
    return [
      {title: "Курс \"Python: программирование на каждый день и сверхбыстрое прототипирование\"", content_id: "1"},
      {title: "Репетиторы Python на сайте \"UpStudy.ru\"!", content_id: "2"},
      {title: "Новые курсы программирования на языке Python от Фоксфорд", content_id: "3"},
      {title: "Бесплатные курсы", content_id: "4"},
      ];
  }
  getCourseContent(content_id: string) {
    return '<h6>Этот сайт призван помочь начинающим и чайникам научиться программировать на python 3. Также здесь можно подробнее узнать об особенностях функционирования этого языка.</h6>';
  }
}
