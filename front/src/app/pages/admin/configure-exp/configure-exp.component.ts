import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-configure-exp',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './configure-exp.component.html',
  styleUrl: './configure-exp.component.css'
})
export default class ConfigureExpComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-admin" },
    { label: "Configurer les niveaux d'expérience", path: "/config-exp" },
    { label: "Créer un quiz", path: "/create-quiz" },
    { label: "Gestion des agents", path: "/manage-agent" },
    { label: "Gérer le référentiel de questions et réponses", path: "questions-answers-referential" },
    { label: "Voir les quiz", path: "/see-quiz" }
  ];
}
