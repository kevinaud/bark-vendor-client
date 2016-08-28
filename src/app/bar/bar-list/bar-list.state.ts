import { Bar } from '../bar';

export interface BarListState {
  bars: Bar[]
};

export const initBarListState: BarListState = {
  bars: []
}