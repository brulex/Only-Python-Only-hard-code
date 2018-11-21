import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
  }

  getLossonsData() {
    return [
      {title: "Возможности языка Python", lesson_id: "1"},
      {title: "Загрузка и установка Python", lesson_id: "2"},
      {title: "Первая программа. Знакомство со средой разработки IDLE", lesson_id: "3"},
      {title: "Синтаксис", lesson_id: "4"},
      {title: "Почему моя программа не работает?", lesson_id: "5"},
      {title: "Условный оператор if", lesson_id: "6"},
      {title: "Циклы", lesson_id: "/7"},
      {title: "Ключевые слова, встроенные функции", lesson_id: "/8"},
      {title: "Числа", lesson_id: "/9"},
      {title: "Строки (часть 1, часть 2, форматирование)", lesson_id: "/10"},
    ];
  }

  getCoursesData() {
    return [];
  }

  getSiteMap() {
    return [];
  }

  getLesson(id: string) {
    return '<h6>Этот сайт призван помочь начинающим и чайникам научиться программировать на python 3. Также здесь можно подробнее узнать об особенностях функционирования этого языка.</h6>';
  }
}
