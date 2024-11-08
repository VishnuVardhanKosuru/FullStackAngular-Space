// investments.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InvestmentsComponent implements OnInit {
  portfolioStats = [
    { value: '$250M', label: 'Assets Under Management' },
    { value: '45+', label: 'Portfolio Companies' },
    { value: '8', label: 'Exit Success Stories' },
    { value: '25%', label: 'Average ROI' }
  ];

  investmentFocus = [
    {
      title: 'PropTech',
      icon: 'fas fa-building',
      description: 'Technology solutions revolutionizing real estate management, transactions, and operations.'
    },
    {
      title: 'Smart Cities',
      icon: 'fas fa-city',
      description: 'Urban innovation technologies enhancing city infrastructure and sustainability.'
    },
    {
      title: 'FinTech',
      icon: 'fas fa-chart-line',
      description: 'Financial technology solutions for real estate transactions and investment.'
    },
    {
      title: 'Sustainability',
      icon: 'fas fa-leaf',
      description: 'Green technologies and sustainable solutions for modern real estate.'
    }
  ];

  portfolioCompanies = [
    {
      name: 'Dhruva',
      logo: 'assets/company1.jpg',
      description: 'An Indian spacetech startup focused on satellite design and  manufacturing',
      investmentYear: 2022,
      status: 'Growing'
    },
    {
      name: 'DressUpRocket',
      logo: 'assets/company2.jpg',
      description: 'Space themed mystery AR game company based in san fransisco',
      investmentYear: 2021,
      status: 'Series B'
    },
    {
      name: 'Orion Aerospace',
      logo: 'assets/company3.jpg',
      description: 'Space propellors research company at the west coast',
      investmentYear: 2023,
      status: 'Early Stage'
    }
  ];

  investmentProcess = [
    {
      stage: 'Initial Screening',
      description: 'Evaluation of business model, market potential, and team',
      duration: '2-3 weeks'
    },
    {
      stage: 'Due Diligence',
      description: 'Detailed analysis of technology, financials, and market fit',
      duration: '4-6 weeks'
    },
    {
      stage: 'Investment Committee',
      description: 'Final review and investment decision',
      duration: '1-2 weeks'
    },
    {
      stage: 'Deal Closing',
      description: 'Legal documentation and fund transfer',
      duration: '2-3 weeks'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  handleImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/150'; // Fallback image
  }
}