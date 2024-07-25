import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/weather/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getWeatherData(city : string): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiUrl+city);
  }
}