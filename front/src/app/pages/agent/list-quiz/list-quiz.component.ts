import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-list-quiz',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './list-quiz.component.html',
  styleUrl: './list-quiz.component.css'
})
export default class ListQuizComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-agent" },
    { label: "Lister les quiz", path: "/list-quiz" },
    { label: "Résultats", path: "/results" }
  ];
}
