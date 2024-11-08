// innovation-consulting.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-innovation-consulting',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InnovationConsultingComponent implements OnInit {
  services = [
    {
      title: 'Digital Transformation',
      icon: 'fas fa-digital',
      description: 'Transform your traditional real estate operations with cutting-edge digital solutions.',
      features: [
        'Technology Stack Assessment',
        'Digital Roadmap Creation',
        'Implementation Strategy',
        'Change Management'
      ]
    },
    {
      title: 'Innovation Strategy',
      icon: 'fas fa-lightbulb',
      description: 'Develop a comprehensive innovation strategy aligned with your business goals.',
      features: [
        'Market Analysis',
        'Competitive Positioning',
        'Innovation Framework',
        'KPI Development'
      ]
    },
    {
      title: 'PropTech Integration',
      icon: 'fas fa-building',
      description: 'Seamlessly integrate property technology solutions into your existing infrastructure.',
      features: [
        'Technology Selection',
        'Systems Integration',
        'Process Optimization',
        'Performance Monitoring'
      ]
    },
    {
      title: 'Data Analytics',
      icon: 'fas fa-chart-bar',
      description: 'Leverage data-driven insights to make informed real estate decisions.',
      features: [
        'Data Strategy',
        'Analytics Implementation',
        'Predictive Modeling',
        'Reporting Automation'
      ]
    }
  ];

  methodology = [
    {
      phase: 'Discovery',
      description: 'Understanding your current state, challenges, and objectives',
      activities: [
        'Stakeholder Interviews',
        'Process Analysis',
        'Technology Assessment',
        'Market Research'
      ],
      duration: '2-3 weeks'
    },
    {
      phase: 'Strategy Development',
      description: 'Creating a tailored roadmap for innovation implementation',
      activities: [
        'Gap Analysis',
        'Solution Design',
        'ROI Modeling',
        'Implementation Planning'
      ],
      duration: '4-6 weeks'
    },
    {
      phase: 'Implementation',
      description: 'Executing the innovation strategy with careful change management',
      activities: [
        'Solution Deployment',
        'Team Training',
        'Process Integration',
        'Performance Monitoring'
      ],
      duration: '3-6 months'
    },
    {
      phase: 'Optimization',
      description: 'Continuous improvement and refinement of implemented solutions',
      activities: [
        'Performance Analysis',
        'User Feedback',
        'System Optimization',
        'Strategy Refinement'
      ],
      duration: 'Ongoing'
    }
  ];

  successMetrics = [
    { value: '45%', label: 'Average Operational Efficiency Improvement' },
    { value: '60%', label: 'Digital Adoption Rate' },
    { value: '30%', label: 'Cost Reduction' },
    { value: '85%', label: 'Client Satisfaction' }
  ];

  caseStudies = [
    {
      title: 'Global Real Estate Firm Digital Transformation',
      image: 'assets/case-studies/case1.jpg',
      challenge: 'Legacy systems hindering growth and efficiency',
      solution: 'Implemented integrated PropTech ecosystem',
      results: [
        '40% reduction in operational costs',
        '60% faster transaction processing',
        'Improved customer satisfaction'
      ]
    },
    {
      title: 'Smart Building Implementation',
      image: 'assets/case-studies/case2.jpg',
      challenge: 'High energy costs and inefficient building management',
      solution: 'IoT-based smart building solution deployment',
      results: [
        '35% energy savings',
        'Improved tenant satisfaction',
        'Reduced maintenance costs'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  handleImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/400x300';
  }
}