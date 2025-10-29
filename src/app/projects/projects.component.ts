import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  openSourceProjects = [
    {
      title: 'Portfolio Website',
      description: 'This website is a showcase of my open source work and professional experience',
      technologies: ['Angular', 'Bootstrap'],
      gitHubUrl: 'https://github.com/cameronjoebrown/portfolio-website',
      liveUrl: 'https://cameronjoebrown.com'
    }
  ];

  workProjects = [
    {
      title: 'Enterprise Financial Platform',
      description: "A platform for managing and analyzing enterprise financial data",
      technologies: ['React', 'Spring Boot', 'AWS'],
      company: 'Pivotal',
      year: '2023'
    }
  ]

  ngOnInit(): void {
      
  }
}
