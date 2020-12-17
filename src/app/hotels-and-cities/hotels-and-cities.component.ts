import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  addingNewHotel = false;
  addHotelForm: FormGroup;

  cities: City[] = [];
  hotels: Hotel[] = [];

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.service.getAllCities();
    this.service.getAllHotels();
    this.citiesSubscription = this.service.citiesSubject.subscribe((cities) => this.cities = cities);
    this.hotelsSubscription = this.service.hotelsSubject.subscribe((hotels) => this.hotels = hotels);

  }

  initializeForm() {
    this.addHotelForm = new FormGroup(
      {
        hotelName: new FormControl(null),
        stars: new FormControl(null),
        city: new FormControl(null)
      }
    )
  }

  addNewHotel() {
    const hotel: Hotel = {
      ime_hotela: this.addHotelForm.get('hotelName').value,
      zvezdice: this.addHotelForm.get('stars').value,
      id_grada: this.addHotelForm.get('city').value,
    };
    this.service.addNewHotel(hotel);
  }

  switchAddingModeHotels() {
    if (!this.addingNewHotel) this.addingNewHotel = true;
  }


  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.hotelsSubscription?.unsubscribe();
  }


}
