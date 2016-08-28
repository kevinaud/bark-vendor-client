import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { OPEN_DASH_SIDENAV, CLOSE_DASH_SIDENAV } from '../../app.actions';

@Component({
  moduleId: module.id,
  selector: 'dash-sidenav',
  template: `
    <md-sidenav-layout>
      <md-sidenav #sidenav [opened]="open | async" (open)="setOpenState(sidenav)" (close)="setClosedState(sidenav)">

        <md-card>
          <md-card-content>
            <md-icon class="close-menu-icon" (click)="setClosedState(sidenav)">chevron_left</md-icon>
          </md-card-content>
        </md-card>

        <div class="row grid-container center-xs">
        <div class="col-xs-12">

          <div class="box">
            <a md-raised-button class="add-bar-button" color="accent"
              [routerLink]="['./bars/add', 'add-bar']">Add Bar</a>
          </div>

        </div>
        <div class="col-xs-12">

          <div class="box">
            <a md-raised-button class="nav-button" color="primary"
              [routerLink]="['./', '']">Home</a>
          </div>

        </div>
        </div>

      </md-sidenav>

      <ng-content></ng-content>

    </md-sidenav-layout>
  `,
  styleUrls: ['sidenav.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class SidenavComponent implements OnInit {

  open: Observable<boolean> = this.store.select(s => s.sideNav);

  constructor(
    private store: Store<any>, 
    private router: Router) { }

  ngOnInit() {
    this.store.subscribe(s => {
      console.log(s);
    });
  }

  setOpenState(sidenav){
    let action = { type: OPEN_DASH_SIDENAV };

    var opened = sidenav.open();
    
    opened.then(() => {
      this.store.dispatch(action);
    })

  }

  setClosedState(sidenav){
    let action = { type: CLOSE_DASH_SIDENAV };

    var closed = sidenav.close();
    
    closed.then(() => {
      this.store.dispatch(action);
    })

  }

}
