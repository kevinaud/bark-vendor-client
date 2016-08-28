import { Action, ActionReducer } from '@ngrx/store';

import { Bar } from '../bar';
import { BarListState, initBarListState } from './bar-list.state';
import { 
    BAR_LIST_UPDATE,
    BAR_LIST_ADD,
    BAR_LIST_REMOVE
} from './../../app.actions';

export const barList: ActionReducer<BarListState> = function(state: BarListState = initBarListState, action: Action){

  switch(action.type){

    case BAR_LIST_UPDATE: {
      return { bars: action.payload }; 
    }

    case BAR_LIST_ADD: {
      let barList = state.bars;
      barList.push(action.payload);

      return { bars: barList };
    }

    case BAR_LIST_REMOVE: {
      let barList = filterById(state.bars, action.payload.id);

      return { bars: barList };
    }

    default:
      return state;

  }

}

function filterById(bars, id) {
  return bars.filter((bar) => {
    return bar.id != id;
  });
}