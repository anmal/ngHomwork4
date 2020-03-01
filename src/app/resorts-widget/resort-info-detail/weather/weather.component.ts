import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../../../shared/interfaces/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() object: IWeather;

  constructor() { }

  ngOnInit() {
  }

}
