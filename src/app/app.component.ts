import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public showHeaderAndSidebar: boolean = true;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this._checkRoute();
      }
    });
  }

  private _checkRoute(): void {
    const url = this.router.url;
    this.showHeaderAndSidebar = !(url.includes('/login') || url.includes('/register'));
  }
}
