import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { BarService } from '../bar.service';

@Component({
  moduleId: module.id,
  selector: 'bar-list',
  template: `
    <h1 class="text-center">Bars in Your Area</h1>

      <h3 class="text-center">
        Use this tool to search for bars in our directory
      </h3>
      
      <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <div class="box">

        <div class="row">
        <div class="col-xs-12 col-md-4"
          *ngFor="let bar of (bars | async)">
          <div class="box">

          <bar-list-card
            [name]="bar.name"
            [description]="bar.description"
            [coupons]="bar.coupons"></bar-list-card>

          </div>
        </div>
        </div>

        </div>
      </div>
      </div>
  `,
  styleUrls: ['bar-list.component.css']
})
export class BarListComponent implements OnInit {

  bars = this.store.select( s => s.barList.bars );

  constructor(
    private store: Store<AppStore>,
    private barService: BarService
  ) { }

  ngOnInit() {
    this.barService.getAllBars();
  }

}
