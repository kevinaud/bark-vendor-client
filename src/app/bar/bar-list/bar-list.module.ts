import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

import { BarListComponent } from './bar-list.component';
import { BarCardComponent } from './bar-card/bar-card.component';
import { BarService } from '../bar.service';

@NgModule({
  imports: [ 
    CommonModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    BarListComponent,
    BarCardComponent
  ],
  exports: [ 
    BarListComponent 
  ],
  providers: [
    BarService
  ]
})
export class BarListModule { }