import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from '../model/weatherData';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
 @Input() weather: WeatherData;
  constructor() { }

  ngOnInit() {
  }

}
