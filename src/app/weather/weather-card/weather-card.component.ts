import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  cityName: string;

  constructor(
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.cityName = <string> (params['cityName'] ? params['cityName'] : 'Madrid, ES');
      forkJoin(
        [
          this._weatherService.getWeatherInfo(this.cityName),
          this._weatherService.getForecastInfo(this.cityName)
        ]
      ).subscribe(
        results => {
          this.weather = this._weatherService.mapResult(results[0], results[1]);
        },
        error => {
          alert(error.message);
        }
      );
    });
  }
}
