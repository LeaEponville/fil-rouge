import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-agent" },
    { label: "Lister les quiz", path: "/list-quiz" },
    { label: "Résultats", path: "/results" }
  ];
}
