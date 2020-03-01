import {createAction, props} from '@ngrx/store';
import {IResortInfo} from '../../shared/interfaces/resortInfo';

export class ResortsAction {

  static GET_OBJECT = `[Resorts] Get object...`;
  static GET_OBJECT_OK = `[Resorts] Get object - OK`;
  static GET_OBJECT_FAIL = `[Resorts] Get object - ERROR`;

  static GET_OBJECT_LIST = `[Resorts] Get object list...`;
  static GET_OBJECT_LIST_OK = `[Resorts] Get object list - OK`;
  static GET_OBJECT_LIST_FAIL = `[Resorts] Get object list - ERROR`;

  static SELECT_OBJECT = `[Resorts] Select object...`;

  static getObject = createAction(ResortsAction.GET_OBJECT, props<{id: number}>());
  static getObjectOk = createAction(ResortsAction.GET_OBJECT_OK, props<{obj: IResortInfo}>());
  static getObjectFail = createAction(ResortsAction.GET_OBJECT_FAIL);

  static getObjectList = createAction(ResortsAction.GET_OBJECT_LIST, props<{filter: string}>());
  static getObjectListOk = createAction(ResortsAction.GET_OBJECT_LIST_OK, props<{data: IResortInfo[]}>());
  static getObjectListFail = createAction(ResortsAction.GET_OBJECT_LIST_FAIL);

  static selectObject = createAction(ResortsAction.SELECT_OBJECT, props<{id: number}>());
}
