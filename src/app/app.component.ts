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
  cityName: string = 'Ahmedabad';
  weatherdata?: WeatherData;

  ngOnInit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(city: string){
    this.weatherService.getWeatherData(city)
    .subscribe(response => {
      this.weatherdata = response;
    });
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  title = 'Weather-App';
}
