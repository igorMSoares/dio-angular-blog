import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  @Input()
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd)
        this.isHomePage = val.url === '/';
    });
  }
}
