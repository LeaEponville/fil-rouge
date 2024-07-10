import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-create-quiz',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export default class CreateQuizComponent {  
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-admin" },
    /*{ label: "Configurer les niveaux d'expérience", path: "/config-exp" },*/
    { label: "Créer un quiz", path: "/create-quiz" },
    { label: "Gestion des agents", path: "/manage-agent" },
    /*{ label: "Gérer le référentiel de questions et réponses", path: "questions-answers-referential" },*/
    { label: "Voir les quiz", path: "/see-quiz" }
  ];

}
