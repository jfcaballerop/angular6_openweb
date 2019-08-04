import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

const weatherRoutes: Routes = [
    {
        path: 'weather',
        component: MainLayoutComponent,
        children: [
            { path: 'search', component: WeatherSearchComponent},
            { path: 'info/:cityName', component: WeatherCardComponent }
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
