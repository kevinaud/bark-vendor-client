import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { OPEN_DASH_SIDENAV } from '../../app.actions';

@Component({
  moduleId: module.id,
  selector: 'dash-toolbar',
  template: `
    <md-toolbar color="accent">

      <md-icon class="menu-icon" (click)="openSidenav()">menu</md-icon>
      
      <span class="nav-brand">Bark</span>

      <!-- This fills the remaining space of the current row -->
      <span class="fill-remaining-space"></span>

      <button md-raised-button
        *ngIf="activeUrl === '/dashboard/add-bar'"
        class="dashboard-link"
        [routerLink]="['../', '']" 
        color="primary">

        Back To Home Page
        
      </button>

    </md-toolbar>
  `,
  styleUrls: ['toolbar.component.css'],
  directives: [ 
    ROUTER_DIRECTIVES
  ]
})
export class ToolbarComponent implements OnInit {

  activeUrl;

  constructor(private store: Store<any>, private activatedRoute: ActivatedRoute, private r: Router) {
    this.activeUrl = this.activatedRoute.snapshot.url;
    this.r.events.subscribe(s => this.activeUrl = s.url);
  }

  ngOnInit() {

  }

  openSidenav(){
    let action = { type: OPEN_DASH_SIDENAV };
    this.store.dispatch(action);
  }

}
