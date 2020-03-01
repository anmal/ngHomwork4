import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortInfoBriefComponent } from './resort-info-brief.component';
import {TelephonePipe} from '../../../shared/pipes/telephone.pipe';
import {ImgUrlPipe} from '../../../shared/pipes/imgUrl.pipe';

describe('ResortInfoBriefComponent', () => {
  let component: ResortInfoBriefComponent;
  let fixture: ComponentFixture<ResortInfoBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortInfoBriefComponent, TelephonePipe, ImgUrlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortInfoBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
