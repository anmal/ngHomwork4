import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortListComponent } from './resort-list.component';
import {ResortInfoBriefComponent} from './resort-info-brief/resort-info-brief.component';
import {SocialInfoComponent} from '../resort-info-detail/social-info/social-info.component';
import {WeatherComponent} from '../resort-info-detail/weather/weather.component';
import {TemperatureComponent} from '../resort-info-detail/weather/temperature/temperature.component';
import {ImgUrlPipe} from '../../shared/pipes/imgUrl.pipe';
import {TelephonePipe} from '../../shared/pipes/telephone.pipe';
import {ResortsWidgetComponent} from '../resorts-widget.component';
import {ResortInfoDetailComponent} from '../resort-info-detail/resort-info-detail.component';
import {FooterComponent} from '../footer/footer.component';

describe('ResortsListComponent', () => {
  let component: ResortListComponent;
  let fixture: ComponentFixture<ResortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortsWidgetComponent,
        ResortInfoDetailComponent,
        ResortInfoBriefComponent,
        ResortListComponent,
        FooterComponent,
        WeatherComponent,
        SocialInfoComponent,
        TemperatureComponent,
        ImgUrlPipe,
        TelephonePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
