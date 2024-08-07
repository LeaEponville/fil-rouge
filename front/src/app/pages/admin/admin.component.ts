import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export default class AdminComponent {
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

