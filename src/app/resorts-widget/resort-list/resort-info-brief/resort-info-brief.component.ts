import {Component, Input, OnInit} from '@angular/core';
import {IResortInfo} from '../../../shared/interfaces/resortInfo';

@Component({
  selector: 'app-resort-info-brief',
  templateUrl: './resort-info-brief.component.html',
  styleUrls: ['./resort-info-brief.component.css']
})
export class ResortInfoBriefComponent implements OnInit {

  @Input() object: IResortInfo;

  constructor() { }

  ngOnInit() {
  }

}
