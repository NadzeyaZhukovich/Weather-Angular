import {Component} from '@angular/core';
import {WeatherData} from './model/weatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todayWeather: WeatherData;
  nextFourDaysWeather: Array<WeatherData>;

  weatherDescription(data: Array<WeatherData>) {
    const weatherArray = [...data];

    // get today weather
    this.todayWeather = weatherArray[0];
    // remove first value and get next 4 days
    weatherArray.shift();
    this.nextFourDaysWeather = weatherArray;
  }
}
