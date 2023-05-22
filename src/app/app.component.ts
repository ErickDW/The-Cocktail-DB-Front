import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Cocktail';
  noShowNavbarIn = new Set<string>([
    '/auth/login',
    '/auth/register',]
  )

  constructor(private router: Router) { }

  showNavbar(): boolean {
    const currentUrl = this.router.url;
    return !this.noShowNavbarIn.has(currentUrl);
  }
}
