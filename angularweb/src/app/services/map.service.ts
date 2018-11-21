import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getSiteMap() {
    return {
      data: {
        courses:[
          {title: "Курс \"Python: программирование на каждый день и сверхбыстрое прототипирование\"", content_id: "1"},
          {title: "Репетиторы Python на сайте \"UpStudy.ru\"!", content_id: "2"},
          {title: "Новые курсы программирования на языке Python от Фоксфорд", content_id: "3"},
          {title: "Бесплатные курсы", content_id: "4"}
        ],
        lessons:[{title: "Возможности языка Python", content_id: "1"},
          {title: "Загрузка и установка Python", content_id: "2"},
          {title: "Первая программа. Знакомство со средой разработки IDLE", content_id: "3"},
          {title: "Синтаксис", content_id: "4"},
          {title: "Почему моя программа не работает?", content_id: "5"},
          {title: "Условный оператор if", content_id: "6"},
          {title: "Циклы", content_id: "7"},
          {title: "Ключевые слова, встроенные функции", content_id: "8"},
          {title: "Числа", content_id: "9"},
          {title: "Строки (часть 1, часть 2, форматирование)", content_id: "10"}]
      }
    };
  }
}
