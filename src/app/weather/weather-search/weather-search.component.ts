import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  loading: boolean;
  cityName: string;

  constructor() {
  }

  ngOnInit() {
    this.loading = false;

    setTimeout(() => {
      this.cityName = 'Prueba Doble Binding';

    }, 10000);
  }

  public searchCity($event) {
    this.loading = !this.loading;
    this.searchEvent.emit(this.cityName);

    console.log('Evento', $event);
  }
}

