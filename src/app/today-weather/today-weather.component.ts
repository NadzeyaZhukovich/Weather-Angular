import {Component, Input} from '@angular/core';
import {WeatherData} from '../model/weatherData';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent {
  @Input() displayWeatherData: WeatherData;
  constructor() { }
}
