import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  url$ = "https://open-weather13.p.rapidapi.com/city/";
  XRapidAPIHostHeaderName= 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue= 'open-weather13.p.rapidapi.com';
  XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue= '6f10be4ef2mshd0b4850553e26bcp136e46jsnaa2c85a3c944'

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.url$ + cityName,{
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName,this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName,this.XRapidAPIKeyHeaderValue)
    }
    )
  }
}
