import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  noOfDays: Number;
  cityName: String;
  dataSet: Object;
  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.noOfDays = 7;
    this.cityName = 'London';
  }
  getWeatherData(): void {
    this.weatherDataService.getData(this.cityName, this.noOfDays)
      .subscribe(
        dataSet => this.dataSet = dataSet);
  }
}
