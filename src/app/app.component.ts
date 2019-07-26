import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aweather';


  cityName = 'app';

  public search(cityName: string): void {
    this.cityName = cityName
  }

}
