import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {TemperatureUnits} from '../model/temperatureUnits';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private generateWeatherUrl(units: TemperatureUnits, cityName: string) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}
      &units=${units}
      &appid=${environment.apiKey}`;
  }

  private fetchData(url: string) {
    return fetch(url)
      .then(response => response.json());
  }

  getWeatherData(units: TemperatureUnits, cityName: string) {
    return this.fetchData(
      this.generateWeatherUrl(units, cityName)
    );
  }
}
