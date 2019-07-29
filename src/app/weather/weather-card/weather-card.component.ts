import { Component, OnInit } from '@angular/core';
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
    this._weatherService.getWeatherInfo('Madrid, ES').subscribe(
      data => {
        if (data === undefined) {
          alert('La ciudad buscada no existe');
        } else {
          this.weather = this._weatherService.mapResult(data);
        }
      }
    );
  }

}
