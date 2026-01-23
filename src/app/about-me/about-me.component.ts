import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faGoodreads } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css'],
    standalone: false
})
export class AboutMeComponent implements OnInit {
    constructor() {}

    faGithub = faGithub;
    faLinkedin = faLinkedin;
    faGoodreads = faGoodreads;

    ngOnInit(): void {}
}
