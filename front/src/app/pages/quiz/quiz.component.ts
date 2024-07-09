import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export default class QuizComponent implements OnInit {
  quizData = [
    {
      question: "1) Qu'est-ce que le .NET Framework ?",
      options: [
      "a) Un environnement de développement pour des applications mobiles.",
      "b) Un environnement de développement pour des applications web.",
      "c) Un environnement de développement pour des applications console.",
      "d) Un environnement de développement pour des applications Windows et web."
      ],
      answer: "d) Un environnement de développement pour des applications Windows et web."
    },
    {
      question: "2) Quel langage de programmation est principalement utilisé avec .NET ?",
      options: ["a) Java", "b) Python", "c) C#", "d) Ruby"],
      answer: "c) C#"
    },
    {
      question: "3) Quel IDE est couramment utilisé pour développer des applications .NET ?",
      options: ["a) Visual Studio", "b) Visual Studio Code", "c) Eclipse", "d) Mono"],
      answer: "a) Visual Studio"
    },
    {
      question: "4) Qu'est-ce que CLR signifie dans le contexte de .NET ?",
      options: ["a) Common Language Runtime", "b) Common Language Resource", "c) Central Language Runtime", "d) Central Language Resource"],
      answer: "a) Common Language Runtime"
    },
    {
      question: "5) Quelle est la principale base de données utilisée avec .NET ?",
      options: ["a) PostgreSQL", "b) MySQL", "c) Oracle", "d) SQL Server"],
      answer: "d) SQL Server"
    },
    {
      question: "6) Qu'est-ce que ASP.NET ?",
      options: ["a) Un framework de développement mobile", "b) Un framework de développement web", "c) Un framework de développement console", "d) Un framework de développement web et mobile"],
      answer: "b) Un framework de développement web"
    },
    {
      question: "7) Quel fichier contient les informations de configuration d'une application .NET ?",
      options: ["a) web.config", "b) app.config", "c) machine.config", "d) settings.config"],
      answer: "a) web.config"
    },
    {
      question: "8) Quel est le principal gestionnaire de packages pour .NET ?",
      options: ["a) NuGet", "b) NPM", "c) Maven", "d) Gradle"],
      answer: "a) NuGet"
    },
    {
      question: "9) Qu'est-ce que LINQ permet de faire ?",
      options: ["a) Développer des applications web", "b) Accéder et manipuler des données de manière fluide", "c) Gérer les configurations d'applications", "d) Créer des interfaces utilisateur"],
      answer: "b) Accéder et manipuler des données de manière fluide"
    },
    {
      question: "10) Quel framework .NET est utilisé pour le développement multiplateforme ?",
      options: ["a) .NET Framework", "b) .NET Standard", "c) .NET Core", "d) .NET MVC"],
      answer: "c) .NET Core"
      
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
    this.optionsElement.innerHTML ="";
    this.submitButton.innerHTML ="";
    this.questionElement.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${this.score}/${this.quizData.length}</p>
    `;
  }
}