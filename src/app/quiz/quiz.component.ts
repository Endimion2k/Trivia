import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  wrongAnswers = 0;
  timeLeft: number = 10;
  interval: any;
  now: any;

  getTime() {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.currentQuiz === this.quizzes.length) {
        this.showResult();
        clearInterval(this.interval);
      }
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        {
          this.wrongAnswers++;
          this.currentQuiz++;
          this.timeLeft = 10;
        }
      }
    }, 1000);
  }
  resetTimer() {
    this.timeLeft = 10;
  }

  result = false;
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.startTimer();
    this.getTime();
  }

  onAnswer(option: boolean) {
    this.answerSelected = true;

    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;

      this.resetTimer();
    }, 2000);
    if (option) {
      this.correctAnswers++;
    } else {
      this.wrongAnswers++;
    }
  }
  showResult() {
    this.result = true;
  }
}
