import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  openSourceProjects = [
    {
      title: 'Portfolio Website',
      description: 'The code for this portfolio website, built with Angular and Bootstrap. It is currently deployed using a Github Action and hosted on GitHub Pages.',
      technologies: ['Angular', 'Bootstrap'],
      gitHubUrl: 'https://github.com/cameronjoebrown/cameronjoebrown.github.io',
      liveUrl: 'https://cameronjoebrown.com'
    },
    {
      title: 'Iron Blossom Web Scraper',
      description: 'A web scraper of the Iron Blossom Lodge Timeshares for Sale website that sends an email when a new Timeshare unit is posted for sale.',
      technologies: ['Python', 'BeautifulSoup'],
      gitHubUrl: 'https://github.com/cameronjoebrown/ironblossom-web-scraper',
    }
  ];

  workProjects = [
    {
      title: 'Digital Automation Platform UI',
      description: "A web-based UI for managing and visualizing BPMN workflows in Camunda 7.",
      technologies: ['Angular', 'Cypress', 'Playwright', 'Kubernetes', 'AWS'],
      company: 'Fidelity Investments',
      year: '2022-2024'
    }
  ]

  ngOnInit(): void {
      
  }
}
