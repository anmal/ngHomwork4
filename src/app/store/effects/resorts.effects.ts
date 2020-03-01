import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ResortsAction} from '../actions/resorts.action';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {IResortInfo} from '../../shared/interfaces/resortInfo';
import {DataService} from '../../shared/services/data.service';

@Injectable()
export class ResortsEffects {
  constructor(private actions$: Actions,
              private dataService: DataService) {
  }

  getObject$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(ResortsAction.GET_OBJECT),
        map((action: Action | any ) => action.id),
        switchMap((objID: number ) => this.dataService.getResort(objID)
          .pipe(
            mergeMap((objRes: IResortInfo) => {
              return [ResortsAction.getObjectOk({obj: objRes})];
            }),
            catchError(() =>  [ ResortsAction.getObjectFail()] )
          ))));


  getObjects$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(ResortsAction.GET_OBJECT_LIST),
        map((action: Action | any) => action.filter),
        switchMap((filter) => this.dataService.getResorts(filter)
          .pipe(
            mergeMap((resultList) => {
              return [ResortsAction.getObjectListOk({data: resultList })];
            }),
            catchError(() => {
              return [ ResortsAction.getObjectListFail()];
            })
          ))
      ));
}
