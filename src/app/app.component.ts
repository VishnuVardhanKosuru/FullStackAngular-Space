import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import { FooterComponent } from "./components/footer/footer.component";
=======
>>>>>>> origin

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HomeComponent, SignupComponent, RouterModule, FooterComponent],
=======
  imports: [RouterOutlet, HomeComponent, SignupComponent,RouterModule],
>>>>>>> origin
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'space-travel';
}
