import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bar-list-card',
  template: `
    <md-card>
      <md-card-subtitle class="disabled-text">{{ coupons.length }} coupons available</md-card-subtitle>
      <md-card-title class="primary-text">{{ name }}</md-card-title>   
      <md-card-content class="secondary-text">
        <p>{{ description }}</p>
      </md-card-content>
    </md-card>
  `,
  styleUrls: ['bar-card.component.css']
})
export class BarCardComponent implements OnInit {

  @Input() coupons = [ ];
  @Input() distance: number = 0.0;
  @Input() description: string = 'Description';
  @Input() name: string = 'Name';

  constructor() { }

  ngOnInit() {
  }

}
