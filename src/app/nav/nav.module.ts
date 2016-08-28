import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdIconModule } from '@angular2-material/icon';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [ 
    RouterModule,
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdIconModule,
    MdToolbarModule
  ],
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  exports: [ 
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [ ]
})
export class NavModule { }