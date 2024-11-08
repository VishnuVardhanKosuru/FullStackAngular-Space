import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class AboutusComponent implements OnInit {
  teamMembers = [
    {
      name: 'Sri Harshitha',
      position: 'CEO & Co-Founder',
      image: 'assets/harshitha.jpg',  
      description: 'Over 15 years of experience in technology and innovation',
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      name: 'Sree Virajitha',
      position: 'Chief Innovation Officer',
      image: 'assets/vir.jpg',
      description: 'Expert in digital transformation and strategic planning',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Vishnu Vardhan',
      position: 'Managing Director & Co-Founder',
      image: 'assets/vishnu.jpg',
      description: 'Fueling our journey to the stars',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Supreeth Gupta',
      position: 'Co-CEO & CTO',
      image: 'assets/sup.jpg',
      description: 'Crafting the technology that will shape the cosmos',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    // Add more team members as needed
  ];

  stats = [
    { value: '500+', label: 'Startups Accelerated' },
    { value: '50M+', label: 'Investment Raised' },
    { value: '100+', label: 'Global Partners' },
    { value: '20+', label: 'Countries Reached' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}