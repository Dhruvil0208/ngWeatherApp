import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private weatherService : WeatherService){}

  weatherdata?: WeatherData;

  ngOnInit(){
    this.weatherService.getWeatherData('London')
    .subscribe(response => {
      this.weatherdata = response;
    });
  }

  title = 'Weather-App';
}
