import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Care e capitala Romaniei?',
      answer: [
        { option: 'Iashingthon', correct: false },
        { option: 'Brasovwood', correct: false },
        { option: 'Focsangeles', correct: false },
        { option: 'Bucale', correct: true },
      ],
    },
    {
      question: 'Cine e cu noi striga...?',
      answer: [
        { option: 'Fiare veeeechi', correct: false },
        { option: 'Oooooo Oooooo', correct: true },
        {
          option: 'NU IMI SPUI TU MIE CUM SA STRIG...PITICA DRACU',
          correct: false,
        },
        { option: 'Cristiiii!!!', correct: false },
      ],
    },
    {
      question: 'Ce facem noi cand gasim un portofel cu bani?',
      answer: [
        { option: 'Ne uitam sa vedem cat ne-a adus norocul', correct: false },
        { option: 'Sunam la Militie, la telefon 22-22-22', correct: false },
        { option: 'Ne inscriem la cursuri de full-stack', correct: true },
        { option: 'Il predam proprietarului', correct: false },
      ],
    },
    {
      question: 'Ce facem dupa ce ne angajam developeri?',
      answer: [
        { option: 'Primul padding', correct: true },
        { option: 'Mergem in Bali', correct: false },
        { option: 'Actualizam pagina de LinkedIn', correct: false },
        { option: 'Ne trezim...ca e dimineata', correct: false },
      ],
    },
    {
      question: 'Testezi codul si da crash. Ce faci?',
      answer: [
        { option: 'Inspectez codul din nou', correct: false },
        { option: '"Inger ingerasul meu...FMM"', correct: false },
        { option: '//......//', correct: false },
        { option: 'Mai dau test inca o data...poate merge', correct: true },
      ],
    },
  ];
  constructor() {}
  getQuizzes() {
    return this.quizzes;
  }
}
