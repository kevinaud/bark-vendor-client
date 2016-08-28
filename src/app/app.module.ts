import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';

import { routing, appRoutingProviders } from './app.routing';
import { APP_STORE } from './app.store';

import { BarListModule } from './bar/bar-list/bar-list.module';
import { FormsModule } from './shared/forms/forms.module';
import { NavModule } from './nav/nav.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

import { barList } from './bar/bar-list/bar-list.reducer';

import { BarListState, initBarListState } from './bar/bar-list/bar-list.state';
  
let appStore = {
  barList: barList
}

let initAppStoreState = {
  barList: initBarListState
}

@NgModule({
  imports: [ 
	  BrowserModule,
    APP_STORE,
    routing,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    FormsModule,
    BarListModule,
    NavModule
  ],
  declarations:[ 
	  AppComponent,
    HomeComponent
  ],
  bootstrap: [ 
	  AppComponent 
  ],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule { }
