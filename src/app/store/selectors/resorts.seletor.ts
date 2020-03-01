import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IResortsState} from '../reducers/resorts.reducer';


export class ResortsSelectors {

  static feature = createFeatureSelector<IResortsState>('resorts');

  static selectedObjId = createSelector(
      ResortsSelectors.feature,
      (state: IResortsState) => state.selectedObjID);

  static entities = createSelector(
    ResortsSelectors.feature,
    (state: IResortsState) => state.entities);

  static selectedResort = createSelector(
    ResortsSelectors.entities,
    ResortsSelectors.selectedObjId,
    (entities, id: number) => entities[id]
  );

  static resortListIds = createSelector(
    ResortsSelectors.feature,
    (state) => state.resortsList);

  static resortList = createSelector(
    ResortsSelectors.entities,
    ResortsSelectors.resortListIds,
    (entities, selectedIds) => (selectedIds.map(id => entities[id]))
  );

  static isLoading = createSelector(
    ResortsSelectors.feature,
    (state: IResortsState) => state.isLoading);
}

