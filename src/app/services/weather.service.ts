import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../weather/forecast.model';
import { Weather } from '../weather/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlApiForecast = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private cityQuery = 'Madrid,es';
  private addSymbol = '&';
  private appID = 'APPID=98921063bab96b2553d78ba98642169a';
  constructor(
    private _http: HttpClient
  ) { }

  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${cityName}${this.addSymbol}${this.appID}`;

    return this._http.get(url);
  }

  public getForecastInfo(cityName: string): Observable<any> {
    const url = `${this.urlApiForecast}${cityName}${this.addSymbol}${this.appID}`;

    return this._http.get(url);
  }


  public mapResult(result: any, resultForecast: any): Weather {
    const weatherInfo = new Weather();

    weatherInfo.city = `${result.name}, ${result.sys.country}`;
    weatherInfo.date = result.dt * 1000; // *1000 para añadir los ms
    weatherInfo.humidity = result.main.humidity;
    weatherInfo.info = result.weather[0].description;
    weatherInfo.maxtemperature = result.main.temp_max;
    weatherInfo.mintemperature = result.main.temp_min;
    weatherInfo.pressure = result.main.pressure;
    // weatherInfo.sunrise = result.sys.sunrise;
    // weatherInfo.sunset = result.sys.sunset;
    weatherInfo.temperature = result.main.temp;
    weatherInfo.winddirection = result.wind.deg;
    weatherInfo.windspeed = result.wind.speed;

    weatherInfo.forecasts = new Array<Forecast>();
    for (const f of resultForecast.list) {
      const newForecast = new Forecast();
      newForecast.date = f.dt * 1000;
      newForecast.day = f.dt_txt;
      newForecast.maxTemperature = f.main.temp_max;
      newForecast.minTemperature = f.main.temp_min;
      newForecast.info = f.weather[0].description;
      weatherInfo.forecasts.push(newForecast);
    }
    return weatherInfo;
  }
}
