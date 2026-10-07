import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  currentUrl = '/';

  constructor(private router: Router) {

    this.currentUrl = this.router.url;

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });

  }

  isHomeActive(): boolean {
    return (
      this.currentUrl === '/' ||
      this.currentUrl.startsWith('/#')
    );
  }

  isSectionActive(section: string): boolean {
    return (
      this.currentUrl === '/' &&
      window.location.hash === `#${section}`
    );
  }
}