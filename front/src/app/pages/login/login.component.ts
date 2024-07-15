import { Component } from '@angular/core'; // Importer le décorateur Component depuis Angular core
import { AuthService } from '../../services/auth.service'; // Importer le AuthService depuis le répertoire des services
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importer le FormsModule pour les formulaires basés sur les templates

@Component({
  selector: 'app-login', // Définir le sélecteur pour le composant
  standalone: true, // Indiquer que ce composant est autonome
  imports: [FormsModule, ReactiveFormsModule], // Spécifier les modules à importer
  templateUrl: './login.component.html', // Chemin vers le template HTML
  styleUrls: ['./login.component.css'], // Chemin vers les styles CSS
})
export default class LoginComponent {
  username: string = ''; // Définir une propriété username et l'initialiser à une chaîne vide
  password: string = ''; // Définir une propriété password et l'initialiser à une chaîne vide

  constructor(private authService: AuthService) {} // Injecter le AuthService dans le composant

  onSubmit() {
    this.authService
      .login(this.username, this.password) // Appeler la méthode login de AuthService avec username et password
      .subscribe((response) => { // S'abonner à l'observable retourné par la méthode login
        if (response && response.token) { // Vérifier si la réponse contient un token
          localStorage.setItem('token', response.token); // Stocker le token dans le local storage
        }
      });
  }
}
