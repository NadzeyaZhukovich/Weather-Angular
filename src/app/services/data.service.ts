import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {TemperatureUnits} from '../model/temperatureUnits';
import {WeatherData} from '../model/weatherData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private generateWeatherUrl(units: TemperatureUnits, cityName: string) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}
      &units=${units}
      &appid=${environment.apiKey}`;
  }

  private fetchData(url: string): Promise<WeatherData> {
    return fetch(url)
      .then(response => response.json())
      .then(data => this.mapToWeatherData(data));
  }

  private mapToWeatherData(data): WeatherData {

    return new WeatherData(
      data.name,
      data.main.temp,
      data.weather[0].description,
      data.main.humidity,
      data.wind.speed,
      data.main.pressure,
      data.dt
    );
  }

  getWeatherData(units: TemperatureUnits, cityName: string) {
    return this.fetchData(
      this.generateWeatherUrl(units, cityName)
    );
  }
}
