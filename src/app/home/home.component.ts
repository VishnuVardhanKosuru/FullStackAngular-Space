import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FooterComponent, RouterModule, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

