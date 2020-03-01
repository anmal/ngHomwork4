import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInfoComponent } from './social-info.component';
import {ImgUrlPipe} from '../../../shared/pipes/imgUrl.pipe';

describe('SocialInfoComponent', () => {
  let component: SocialInfoComponent;
  let fixture: ComponentFixture<SocialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [ImgUrlPipe],
      declarations: [ SocialInfoComponent, ImgUrlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
