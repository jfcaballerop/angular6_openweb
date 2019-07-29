import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WeatherModule } from './weather/weather.module';
registerLocaleData(es);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    WeatherModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-*' }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
