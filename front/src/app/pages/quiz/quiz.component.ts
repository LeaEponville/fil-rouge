import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    // Add more questions here...
  ];

  currentQuestion = 0;
  score = 0;

  questionElement!: HTMLElement;
  optionsElement!: HTMLElement;
  submitButton!: HTMLElement;

  ngOnInit() {
    this.questionElement = document.getElementById("question")!;
    this.optionsElement = document.getElementById("options")!;
    this.submitButton = document.getElementById("submit")!;
    this.showQuestion();
  }

  showQuestion() {
    const question = this.quizData[this.currentQuestion];
    this.questionElement.innerText = question.question;

    this.optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      this.optionsElement.appendChild(button);
      button.addEventListener("click", this.selectAnswer.bind(this));
    });
  }

  selectAnswer(e: Event) {
    const selectedButton = e.target as HTMLElement;
    const answer = this.quizData[this.currentQuestion].answer;

    if (selectedButton.innerText === answer) {
      this.score++;
    }

    this.currentQuestion++;

    if (this.currentQuestion < this.quizData.length) {
      this.showQuestion();
    } else {
      this.showResult();
    }
  }

  showResult() {
    this.questionElement.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${this.score}/${this.quizData.length}</p>
    `;
  }
}