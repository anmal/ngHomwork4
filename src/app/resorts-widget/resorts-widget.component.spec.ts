import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsWidgetComponent } from './resorts-widget.component';
import {ResortInfoDetailComponent} from './resort-info-detail/resort-info-detail.component';
import {ResortInfoBriefComponent} from './resort-list/resort-info-brief/resort-info-brief.component';
import {FooterComponent} from './footer/footer.component';
import {ImgUrlPipe} from '../shared/pipes/imgUrl.pipe';
import {WeatherComponent} from './resort-info-detail/weather/weather.component';
import {SocialInfoComponent} from './resort-info-detail/social-info/social-info.component';
import {TelephonePipe} from '../shared/pipes/telephone.pipe';
import {TemperatureComponent} from './resort-info-detail/weather/temperature/temperature.component';
import {ResortListComponent} from './resort-list/resort-list.component';

describe('ResortsWidgetComponent', () => {
  let component: ResortsWidgetComponent;
  let fixture: ComponentFixture<ResortsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsWidgetComponent,
        ResortInfoDetailComponent,
        ResortInfoBriefComponent,
        ResortListComponent,
        FooterComponent,
        WeatherComponent,
        SocialInfoComponent,
        TemperatureComponent,
        ImgUrlPipe,
        TelephonePipe,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
