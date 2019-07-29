import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../weather/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'http://api.openweathermap.org/data/2.5/weather?q='
  private cityQuery = 'Madrid,es';
  private addSymbol = '&';
  private appID = 'APPID=98921063bab96b2553d78ba98642169a';
  // private ClientID = 'dj0yJmk9dVVsV01tS2t6RmwxJmQ9WVdrOVlsaFhkMmxCTmpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE3';
  // private ClientSecret = 'fca0993cf7b5a53e694073e154a5839fc5edefaf';
  // private apiKey = '98921063bab96b2553d78ba98642169a';
  constructor(
    private _http: HttpClient
  ) { }

  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${this.cityQuery}${this.addSymbol}${this.appID}`;
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'OAuth',
    //     'oauth_consumer_key': "YOUR_CONSUMER_KEY",
    //   })
    // };

    return this._http.get(url);
  }
  public mapResult(result: any): Weather {
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
    // weatherInfo.forecasts = new Array<Forecast>();
    // for (const forecast of result.item.forecast) {
    //   const newForecast = new Forecast();
    //   newForecast.date = forecast.date;
    //   newForecast.day = forecast.day;
    //   newForecast.maxTemperature = forecast.high;
    //   newForecast.minTemperature = forecast.low;
    //   newForecast.info = forecast.text;
    //   weatherInfo.forecasts.push(newForecast);
    // }
    return weatherInfo;
  }
}
