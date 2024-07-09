import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-edit-techno',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './edit-techno.component.html',
  styleUrl: './edit-techno.component.css'
})
export class EditTechnoComponent {  
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-admin" },
    /*{ label: "Configurer les niveaux d'expérience", path: "/config-exp" },*/
    { label: "Création et édition de technologies", path: "/edit-techno" },
    { label: "Gestion des agents", path: "/manage-agent" },
    /*{ label: "Gérer le référentiel de questions et réponses", path: "questions-answers-referential" },*/
    { label: "Voir les quiz", path: "see-quiz" }
  ];

}
