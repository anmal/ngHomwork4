import {ResortsEffects} from './effects/resorts.effects';
import {ActionReducer, MetaReducer} from '@ngrx/store';
import {IResortsState, resortsReducer} from './reducers/resorts.reducer';

export interface IAppStore {
  resorts: IResortsState;
}

export const appReducers = {
  resorts: resortsReducer,

};

export const appEffects = [
  ResortsEffects,
];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log(action.type, action, state);
    return reducer(state, action);
  };
}

export const appMetaReducers: MetaReducer<any>[] = [debug];

