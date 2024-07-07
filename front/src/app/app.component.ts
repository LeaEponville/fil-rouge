import { Component } from '@angular/core';
import { NewnavbarComponent } from './components/newnavbar/newnavbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewnavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_fil-rouge';
}
