import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faPlus = faPlus;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  hasRoute(route: string) {
    return this.router.url == route;
  }
}
