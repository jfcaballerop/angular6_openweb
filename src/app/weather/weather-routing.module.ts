import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

const weatherRoutes: Routes = [
    {
        path: 'weather',
        component: MainLayoutComponent,
        children: [
            { path: 'info', component: WeatherCardComponent },
            { path: 'info/:cityName', component: WeatherCardComponent, canActivate: [AuthGuardService] }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(weatherRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WeatherRoutingModule { }
