import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();

  constructor(
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    forkJoin(
      [
        this._weatherService.getWeatherInfo('Madrid, ES'),
        this._weatherService.getForecastInfo('Madrid, ES')
      ]
    ).subscribe(
      results => {
        this.weather = this._weatherService.mapResult(results[0], results[1]);
      },
      error => {
        alert(error.message);
      }
    );
  }
}
