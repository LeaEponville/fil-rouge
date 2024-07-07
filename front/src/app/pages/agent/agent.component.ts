import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-agent" },
    { label: "Lister les quiz", path: "/list-quiz" },
    { label: "Résultats", path: "/results" }
  ];
}
