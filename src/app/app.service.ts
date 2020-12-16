import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from './models/city.model';
import { Hotel } from './models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  citiesSubject: BehaviorSubject<City[]> = new BehaviorSubject([]);
  hotelsSubject: BehaviorSubject<Hotel[]> = new BehaviorSubject([]);
  arrangementsSubject;
  reservationsSubject;
  contractsSubject;
  usersSubject;
  cardsSubject;

  constructor(private http: HttpClient) { }

  getAllCities() {
    this.http.get<{ message: string, payload: City[] }>('http://localhost:8080/getCities').subscribe(
      (response) => {
        console.log('Get All Cities - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }

  getAllHotels() {
    this.http.get<{ message: string, payload: Hotel[] }>('http://localhost:8080/getHotels').subscribe(
      (response) => {
        console.log('Get All Hotels - ', response.message);
        this.hotelsSubject.next(response.payload)
      }
    )
  }

  getAllArrangements() {
    this.http.get<{ message: string, payload: any[] }>('http://localhost:8080/getAllArrangements').subscribe(
      (response) => {
        console.log('Get All Arrangements - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }

  getAllReservations() {
    this.http.get<{ message: string, payload: any[] }>('http://localhost:8080/getAllReservations').subscribe(
      (response) => {
        console.log('Get All Reservations - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }

  getAllCards() {
    this.http.get<{ message: string, payload: any[] }>('http://localhost:8080/getAllPaymentCards').subscribe(
      (response) => {
        console.log('Get All Cards - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }

  getAllUsers() {
    this.http.get<{ message: string, payload: any[] }>('http://localhost:8080/getAllUsers').subscribe(
      (response) => {
        console.log('Get All Users - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }

  getAllRegularContracts() {
    this.http.get<{ message: string, payload: any[] }>('http://localhost:8080/getAllRegularContracts').subscribe(
      (response) => {
        console.log('Get All Regular Contracts - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }

  getAllVipContracts() {
    this.http.get<{ message: string, payload: any[] }>('http://localhost:8080/getAllVipContracts').subscribe(
      (response) => {
        console.log('Get All Vip Contracts - ', response.message);
        this.citiesSubject.next(response.payload)
      }
    )
  }
}
