import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz" },
    { label: "Configurer les niveaux d'expérience", path: "/config-exp" },
    { label: "Création et édition de technologies", path: "/edit-techno" },
    { label: "Gestion des agents", path: "/manage-agent" },
    { label: "Gérer le référentiel de questions et réponses", path: "questions-answers-referential" },
    { label: "Voir les quiz", path: "see-quiz" }
  ];
}

