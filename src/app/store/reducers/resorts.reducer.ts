
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import {ResortsAction} from '../actions/resorts.action';

export interface IResortsState extends EntityState<any> {
  selectedObjID: number;
  resortsList: number[];
  isLoading: boolean;
}

export const objectStateAdapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (item => item.id),
  sortComparer: false,
});


const initialState: IResortsState = objectStateAdapter.getInitialState({
  selectedObjID: undefined,
  resortsList: [],
  isLoading: false
});

const reducerFunc = createReducer(
  initialState,

  on(ResortsAction.getObjectOk, (state, {obj}) => {
    return objectStateAdapter.upsertOne(obj, state);
  }),


  on(ResortsAction.getObjectList, state => ({...state, isLoading: true})),


  on(ResortsAction.getObjectListOk, (state, {data}) => {
    const selectedIds = data.map(item => item.id);
    const firstId = selectedIds.length > 0 ? selectedIds[0] : undefined;
    const newSelectedObjID = selectedIds.includes(state.selectedObjID) ? state.selectedObjID : firstId;
    return objectStateAdapter.setAll(data,
      {... state,
        resortsList: selectedIds, selectedObjID: newSelectedObjID, isLoading: false});
  }),

  on(ResortsAction.getObjectListFail, state => ( {...state, isLoading: false, resortsList: [] } ) ),

  on(ResortsAction.selectObject, (state, {id}) => ({...state, selectedObjID: id})),

);



export const resortsReducer = (state: IResortsState, action: Action) => reducerFunc(state, action);

