import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from '../model/weatherData';

@Component({
  selector: 'app-weather-items-list',
  templateUrl: './weather-items-list.component.html',
  styleUrls: ['./weather-items-list.component.scss']
})
export class WeatherItemsListComponent implements OnInit {
  @Input() displayFourDaysWeatherData: Array<WeatherData>;
  constructor() { }

  ngOnInit() {
  }

}
