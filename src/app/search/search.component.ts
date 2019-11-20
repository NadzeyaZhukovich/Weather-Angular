import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {TemperatureUnits} from '../model/temperatureUnits';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private dataService: DataService) { }
  cityName = '';

  ngOnInit() {
  }

}
