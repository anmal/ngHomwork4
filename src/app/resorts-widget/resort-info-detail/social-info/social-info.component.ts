import {Component, Input, OnInit} from '@angular/core';
import {ISocialInfo} from '../../../shared/interfaces/socialInfo';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {

  @Input() object: ISocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
