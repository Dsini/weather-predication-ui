import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.interface';
import {NgFor, NgForOf,NgIf} from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ NgFor, NgForOf,NgIf,ReactiveFormsModule,FormsModule ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: Weather[] = [];
  cityName: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    
    
    
  }

  fetchWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.weatherData = data;
      
    });
  }

  onSubmit() {
    if (this.cityName.trim() === '') {
      return;
    }
    this.fetchWeatherData(this.cityName);
  }
}