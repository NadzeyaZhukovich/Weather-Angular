import {Component, EventEmitter, Output} from '@angular/core';
import { DataService } from '../services/data.service';
import {TemperatureUnits} from '../model/temperatureUnits';
import {WeatherData} from '../model/weatherData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private dataService: DataService) { }
  cityName = '';
  @Output() weatherDataEmitter: EventEmitter<WeatherData> = new EventEmitter<WeatherData>();

  searchCityBtn(event) {
    this.dataService.getWeatherData(TemperatureUnits.getFahrenheit(), this.cityName)
      .then((data) => {
        this.weatherDataEmitter.emit(data);
      });
  }
}