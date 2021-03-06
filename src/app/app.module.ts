import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../app/services/data.service';
import { SearchComponent } from './search/search.component';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherItemsListComponent } from './weather-items-list/weather-items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodayWeatherComponent,
    WeatherItemComponent,
    WeatherItemsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
