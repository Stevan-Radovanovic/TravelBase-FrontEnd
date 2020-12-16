import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { City } from '../models/city.model';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-hotels-and-cities',
  templateUrl: './hotels-and-cities.component.html',
  styleUrls: ['./hotels-and-cities.component.scss']
})
export class HotelsAndCitiesComponent implements OnInit, OnDestroy {

  citiesSubscription: Subscription;
  hotelsSubscription: Subscription;
  displayedColumns1 = ["naziv_hotela", "zvezdice", "id_grada"];
  displayedColumns2 = ["id_grada", "naziv_grada", "broj_hotela_u_gradu"];


  cities: City[] = [];
  hotels: Hotel[] = [];

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllCities();
    this.service.getAllHotels();
    this.citiesSubscription = this.service.citiesSubject.subscribe((cities) => this.cities = cities);
    this.hotelsSubscription = this.service.hotelsSubject.subscribe((hotels) => this.hotels = hotels);

  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.hotelsSubscription?.unsubscribe();
  }


}
