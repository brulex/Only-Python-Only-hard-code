import {Component, OnInit} from '@angular/core';
import {QuestionContent} from '../models/model';
import {CourseService} from '../services/course.service';
import {ActivatedRoute} from '@angular/router';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css', '../app.component.css']
})
export class QuestionComponent implements OnInit {
  course_id: string;
  questionsList: QuestionContent[];
  question_status = 'begin';
  send = 0;
  receive = 0;
  rating = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) {
    this.questionsList = [{questionData: {title: '', content_id: 0}, answersList: null, answer: null, verified: null}];
  }

  ngOnInit() {

    this.course_id = this.activatedRoute.snapshot.paramMap.get('course_id');
    this.courseService.getQuestionList(Number(this.course_id)).subscribe(value => {
        this.questionsList.pop();
        value.forEach(element => {
          this.questionsList.push({
            questionData: {
              title: element.question,
              content_id: element.id
            },
            answersList: [],
            answer: null,
            verified: false
          });
          element.answers_list.forEach(answer => {
            this.questionsList[this.questionsList.length - 1].answersList.push(
              {
                content_id: answer.id,
                title: answer.answer
              });
          });
        });
      },
      error => {
        alert(JSON.parse(error));
      });
  }

  onChange(mrChange: MatRadioChange) {
    this.questionsList[mrChange.value.question_id].answer = mrChange.value.answer;
  }

  checkAnswers() {
    this.questionsList.forEach(value => {
      if (value.answer !== null) {
        this.send++;
        this.courseService.checkAnswer(value.questionData.content_id, value.answer.content_id).subscribe(response => {
          this.receive++;
          value.verified = response.verified === 1;
          this.rating += response.verified === 1 ? (100 / this.questionsList.length) : 0;

          this.rating = Number(this.rating.toFixed(2));
        }, error => {
          alert(error);
        });
      }
    });
    this.question_status = 'ready';
  }
}
