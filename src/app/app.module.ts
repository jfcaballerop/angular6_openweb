import { LayoutModule } from '@angular/cdk/layout';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
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
    WeatherModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-*' }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
