import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {TemperatureUnits} from '../model/temperatureUnits';
import {WeatherData} from '../model/weatherData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private generateWeatherUrl(units: TemperatureUnits, cityName: string) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}`
      + `&units=${units}`
      + `&appid=${environment.apiKey}`;
  }

  private fetchData(url: string): Promise<any> {
    return fetch(url)
      .then(response => response.json())
      .then(data => data.list.map(weather => this.mapToWeatherData(weather, data.city.name)))
      .then(data => this.mapToNextDaysWeather(data, 5))
      .then(nextDaysWeather => this.mapToMiddayWeather(nextDaysWeather));
  }

  private mapToMiddayWeather(nextDaysWeatherArray: Array<Array<WeatherData>>): Array<WeatherData> {
    const weatherArray = Array<WeatherData>();
    nextDaysWeatherArray.forEach( dayWeatherArray => {
      if (dayWeatherArray.length === 0) {
        return;
      }

      if (dayWeatherArray.length === 8) {
        weatherArray.push(dayWeatherArray[4]);
      } else {
        weatherArray.push(dayWeatherArray[0]);
      }
    });
    return weatherArray;
  }

  private mapToNextDaysWeather(weatherData, dayAmount): Array<Array<WeatherData>> {
    const weatherArray = new Array<Array<WeatherData>>();
    const currentDate = new Date();

    // Current weather
    weatherArray.push(new Array(weatherData[0]));

    for (let i = 1; i < dayAmount; i ++) {
      currentDate.setDate(currentDate.getDate() + 1);

      weatherArray.push(
        this.createWeatherArrayForDate(
          currentDate,
          weatherData
        )
      );
    }
    return weatherArray;
  }

  private createWeatherArrayForDate(date: Date, weatherData: Array<WeatherData>): Array<WeatherData> {
    const dayWeatherArray = new Array<WeatherData>();

    const tmpDateStart = new Date(date);
    tmpDateStart.setHours(0);
    tmpDateStart.setMinutes(0);
    tmpDateStart.setSeconds(0);

    const tmpDateEnd = new Date(date);
    tmpDateEnd.setHours(23);
    tmpDateEnd.setMinutes(59);
    tmpDateEnd.setSeconds(59);

    for (let wI = 0; wI < weatherData.length; wI++) {
      const dateToCheck = weatherData[wI].date.getTime();
      if (dateToCheck >= tmpDateStart.getTime() && dateToCheck <= tmpDateEnd.getTime()) {
        dayWeatherArray.push(weatherData[wI]);
      }
    }
    return dayWeatherArray;
  }

  private mapToWeatherData(data, cityName): WeatherData {
    return new WeatherData(
      cityName,
      data.main.temp,
      data.weather[0].id,
      data.weather[0].description,
      data.main.humidity,
      data.wind.speed,
      data.main.pressure,
      new Date(data.dt * 1000)
    );
  }

  getWeatherData(units: TemperatureUnits, cityName: string) {
    return this.fetchData(
      this.generateWeatherUrl(units, cityName)
    );
  }
}
