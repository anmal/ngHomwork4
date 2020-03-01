import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortInfoDetailComponent } from './resort-info-detail.component';
import {WeatherComponent} from './weather/weather.component';
import {SocialInfoComponent} from './social-info/social-info.component';
import {TemperatureComponent} from './weather/temperature/temperature.component';
import {ImgUrlPipe} from '../../shared/pipes/imgUrl.pipe';

describe('ResortInfoDetailComponent', () => {
  let component: ResortInfoDetailComponent;
  let fixture: ComponentFixture<ResortInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [
      //   ImgUrlPipe,
      // ],
      declarations: [ ResortInfoDetailComponent,
        WeatherComponent,
        SocialInfoComponent,
        TemperatureComponent,
        ImgUrlPipe,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
