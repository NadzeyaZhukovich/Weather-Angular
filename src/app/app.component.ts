import {Component} from '@angular/core';
import {WeatherData} from './model/weatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  weatherData;
  weatherDescription(data: WeatherData) {
    this.weatherData = data;
  }
}
