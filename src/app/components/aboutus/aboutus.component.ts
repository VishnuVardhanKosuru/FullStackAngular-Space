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
      image: 'assets/team/john-doe.jpg',
      description: 'Over 15 years of experience in technology and innovation.',
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      name: 'Sree Virajitha',
      position: 'Chief Innovation Officer',
      image: 'assets/team/jane-smith.jpg',
      description: 'Expert in digital transformation and strategic planning.',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Vishnu Vardhan',
      position: 'Managing Director & Co-Founder',
      image: 'assets/team/jane-smith.jpg',
      description: 'Expert in digital transformation and strategic planning.',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Supreeth Gupta',
      position: 'Co-CEO & CTO',
      image: 'assets/team/jane-smith.jpg',
      description: 'Expert in digital transformation and strategic planning.',
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