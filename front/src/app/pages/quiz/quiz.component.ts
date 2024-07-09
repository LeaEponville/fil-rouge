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
  flag_Breponse = 0;
  flag_Freponse = 0;
  questionElement!: HTMLElement;
  optionsElement!: HTMLElement;
  submitButton!: HTMLElement;

  ngOnInit() {
    this.questionElement = document.getElementById("question")!;
    this.optionsElement = document.getElementById("options")!;
    this.submitButton = document.getElementById("valider")!;
    this.showQuestion();
  }

  showQuestion() {
    const question = this.quizData[this.currentQuestion];
    this.questionElement.innerText = question.question;

    this.optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.style.backgroundColor = "#FFFFFF";
      button.style.borderRadius = "5px";
      this.optionsElement.appendChild(button);
      button.addEventListener("click", this.selectAnswer.bind(this));
    });
    this.submitButton.innerHTML = "";
    const button = document.createElement("button");
    button.innerText = "Valider";
    button.style.backgroundColor = "#FFFFFF";
    button.style.borderRadius = "5px";
    this.submitButton.appendChild(button);
    button.addEventListener("click", this.next.bind(this));
  }

  selectAnswer(e: Event) {
    const selectedButton = e.target as HTMLElement;
    const answer = this.quizData[this.currentQuestion].answer;
    console.log(selectedButton.style.backgroundColor);
    
    selectedButton.style.backgroundColor === "rgb(255, 255, 255)" ? selectedButton.style.backgroundColor = "#00ff00" : selectedButton.style.backgroundColor = "#ffffff";
      
  }
      
  next(e: Event){
  
      // Sélectionner tous les éléments <button> sur la page
      const buttons = document.querySelectorAll("button");
  
      // Parcourir chaque bouton
      buttons.forEach((button, index) => {

        if(button.innerText === this.quizData[this.currentQuestion].answer){ // Vérifie si la bonne réponse est cliqué
          if(button.style.backgroundColor === "rgb(0, 255, 0)"){
            this.flag_Breponse = 1;
          }
          else{
            this.flag_Breponse = 0;
          }
        }
        else{
          if(button.style.backgroundColor === "rgb(0, 255, 0)"){ // Vérifie si une fausse réponse est cliqué
            this.flag_Freponse = 1;
          }
        }
  
          // Afficher le texte de chaque bouton dans la console
          console.log(`Button ${index + 1} text:`, button.innerText);
  
      });
    if(this.flag_Breponse && !this.flag_Freponse){
      this.score++;
      console.log(this.score);
    }
    this.flag_Freponse = 0;
  
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