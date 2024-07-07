import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-generate-quiz-admin',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './generate-quiz-admin.component.html',
  styleUrl: './generate-quiz-admin.component.css'
})
export class GenerateQuizAdminComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-admin" },
    { label: "Configurer les niveaux d'expérience", path: "/config-exp" },
    { label: "Création et édition de technologies", path: "/edit-techno" },
    { label: "Gestion des agents", path: "/manage-agent" },
    { label: "Gérer le référentiel de questions et réponses", path: "questions-answers-referential" },
    { label: "Voir les quiz", path: "see-quiz" }
  ];
}