import { Action, ActionReducer } from '@ngrx/store';

import { OPEN_DASH_SIDENAV, CLOSE_DASH_SIDENAV } from '../../app.actions';

export const sideNav: ActionReducer<boolean> = (state: boolean = false, action: Action) => {

    switch(action.type){

        case OPEN_DASH_SIDENAV:
            return true;

        case CLOSE_DASH_SIDENAV:
            return false;

        default:
            return state;
    }

}
