import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppStore} from '../store';
import {ResortsSelectors} from '../store/selectors/resorts.seletor';
import {ResortsAction} from '../store/actions/resorts.action';

@Component({
  selector: 'app-resorts-widget',
  templateUrl: './resorts-widget.component.html',
  styleUrls: ['./resorts-widget.component.css']
})
export class ResortsWidgetComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(public store: Store<IAppStore>) {
    this.loading$ = this.store.select(ResortsSelectors.isLoading);
  }

  ngOnInit() {
    this.store.dispatch(ResortsAction.getObjectList({filter: null}));
  }
}
