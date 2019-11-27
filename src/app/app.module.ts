import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../app/services/data.service';
import { SearchComponent } from './search/search.component';
import { TodayWeatherComponent } from './today-weather/today-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodayWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
