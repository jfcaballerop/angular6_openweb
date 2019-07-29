import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { SharedModule } from '../shared/shared.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';




@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WeatherCardComponent,
    WeatherSearchComponent
  ],
  providers: [WeatherService]
})
export class WeatherModule { }