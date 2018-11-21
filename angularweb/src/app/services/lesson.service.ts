import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLossonsData() {
    return [
      {title: "Возможности языка Python", content_id: "1"},
      {title: "Загрузка и установка Python", content_id: "2"},
      {title: "Первая программа. Знакомство со средой разработки IDLE", content_id: "3"},
      {title: "Синтаксис", content_id: "4"},
      {title: "Почему моя программа не работает?", content_id: "5"},
      {title: "Условный оператор if", content_id: "6"},
      {title: "Циклы", content_id: "/7"},
      {title: "Ключевые слова, встроенные функции", content_id: "/8"},
      {title: "Числа", content_id: "/9"},
      {title: "Строки (часть 1, часть 2, форматирование)", content_id: "/10"},
    ];
  }

  getLessonContent(content_id: string) {
    return '<h6>Этот сайт призван помочь начинающим и чайникам научиться программировать на python 3. Также здесь можно подробнее узнать об особенностях функционирования этого языка.</h6>';
  }
}
