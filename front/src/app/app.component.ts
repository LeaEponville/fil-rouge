import { Component } from '@angular/core';
import { NewnavbarComponent } from './components/newnavbar/newnavbar.component';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewnavbarComponent, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_fil-rouge';
}
