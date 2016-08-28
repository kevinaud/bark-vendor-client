import { StoreModule } from '@ngrx/store';

import { barList } from './bar/bar-list/bar-list.reducer';
import { sideNav } from './nav/sidenav/sidenav.reducer';

import { BarListState, initBarListState } from './bar/bar-list/bar-list.state';

let appStore = {
  barList: barList,
  sideNav: sideNav
}

let initAppStoreState = {
  barList: initBarListState,
  sideNav: false
}

export const APP_STORE = StoreModule.provideStore(appStore, initAppStoreState);

export interface AppStore {
  barList: BarListState,
  sideNav: boolean
}