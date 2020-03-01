import {Component, OnInit} from '@angular/core';
import {IResortInfo} from '../../shared/interfaces/resortInfo';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store';
import {Observable} from 'rxjs';
import {ResortsSelectors} from '../../store/selectors/resorts.seletor';

@Component({
  selector: 'app-resort-info-detail',
  templateUrl: './resort-info-detail.component.html',
  styleUrls: ['./resort-info-detail.component.css']
})
export class ResortInfoDetailComponent implements OnInit {

  public object$: Observable<IResortInfo>;

  constructor(public store: Store<IAppStore>) {
    this.object$ = this.store.select(ResortsSelectors.selectedResort);
  }

  ngOnInit() {
  }

}
