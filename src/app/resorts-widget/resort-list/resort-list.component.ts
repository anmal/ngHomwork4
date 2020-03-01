import {Component} from '@angular/core';
import {IResortInfo, ResortInfoType} from '../../shared/interfaces/resortInfo';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store';
import {ResortsAction} from '../../store/actions/resorts.action';
import {Observable, of} from 'rxjs';
import {ResortsSelectors} from '../../store/selectors/resorts.seletor';
import {catchError, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-resorts-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent {

  public resortTypes = [ResortInfoType.hotel, ResortInfoType.fishing, ResortInfoType.tour, ResortInfoType.weather];

  public resortList$: Observable<IResortInfo[]>;
  public currResortImg$: Observable<any>;


  constructor(public store: Store<IAppStore>) {

    this.resortList$ = this.store.select(ResortsSelectors.resortList);
    this.currResortImg$ = this.store.select(ResortsSelectors.selectedResort)
      .pipe(switchMap(resort => resort?.img),
        catchError(() => of(null)));
  }

  selectResort(obj: IResortInfo) {
    this.store.dispatch(ResortsAction.selectObject({id: obj.id}));
  }

  filter(resortType: string) {
    this.store.dispatch(ResortsAction.getObjectList({filter: resortType}));
  }
}
