import {Component, computed, inject, OnChanges, OnInit, signal} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, RouterLink, MatRippleModule],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router = inject(Router)
  currentPage = signal('dashboard')

  constructor() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentPage.set(this.router.url.replaceAll('/', ''))
      }
    })
  }
}
