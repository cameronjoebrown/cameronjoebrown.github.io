import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
  // Track whether the menu is open. Start collapsed so it doesn't open automatically on small screens.
  public isMenuCollapsed = true;
}
