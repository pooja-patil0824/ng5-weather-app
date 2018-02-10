import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherDataService {
  constructor(private http: HttpClient) { }
  sharedDataSet: Observable<Object>;
  getData(city, days): Observable<Object> {
    console.log(city, days);
    const url = 'http://api.apixu.com/v1/forecast.json?key=0944816a971f454fa46141443180102&q=' + city + '&days=' + days;
    this.sharedDataSet = this.http.get(url);
    return this.sharedDataSet;
  }
}
