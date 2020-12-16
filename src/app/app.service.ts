import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Arrangement } from './models/arrangement.model';
import { City } from './models/city.model';
import { Contract } from './models/contract.model';
import { Hotel } from './models/hotel.model';
import { PaymentCardType } from './models/payment-card-type.model';
import { PaymentCard } from './models/payment-card.model';
import { Reservation } from './models/reservation.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  citiesSubject: BehaviorSubject<City[]> = new BehaviorSubject([]);
  hotelsSubject: BehaviorSubject<Hotel[]> = new BehaviorSubject([]);
  arrangementsSubject: BehaviorSubject<Arrangement[]> = new BehaviorSubject([]);
  reservationsSubject: BehaviorSubject<Reservation[]> = new BehaviorSubject([]);
  regularContractsSubject: BehaviorSubject<Contract[]> = new BehaviorSubject([]);
  vipContractsSubject: BehaviorSubject<Contract[]> = new BehaviorSubject([]);
  usersSubject: BehaviorSubject<User[]> = new BehaviorSubject([]);
  cardsSubject: BehaviorSubject<PaymentCard[]> = new BehaviorSubject([]);
  typeSubject: BehaviorSubject<PaymentCardType[]> = new BehaviorSubject([]);

  paymentCards: PaymentCard[];

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
    this.http.get<{ message: string, payload: Arrangement[] }>('http://localhost:8080/getAllArrangements').subscribe(
      (response) => {
        console.log('Get All Arrangements - ', response.message);
        this.arrangementsSubject.next(response.payload)
      }
    )
  }

  getAllReservations() {
    this.http.get<{ message: string, payload: Reservation[] }>('http://localhost:8080/getAllReservations').subscribe(
      (response) => {
        console.log('Get All Reservations - ', response.message);
        this.reservationsSubject.next(response.payload)
      }
    )
  }

  getAllCards() {
    this.http.get<{ message: string, payload: PaymentCard[] }>('http://localhost:8080/getAllPaymentCards').subscribe(
      (response) => {
        console.log('Get All Cards - ', response.message);
        this.cardsSubject.next(response.payload);
        this.paymentCards = response.payload;
      }
    )
  }

  getAllCardTypes() {
    this.http.get<{ message: string, payload: PaymentCardType[] }>('http://localhost:8080/getAllPaymentCardTypes').subscribe(
      (response) => {
        console.log('Get All Card Types - ', response.message);
        this.typeSubject.next(response.payload)
      }
    )
  }

  getAllUsers() {
    this.http.get<{ message: string, payload: User[] }>('http://localhost:8080/getAllUsersFromView').subscribe(
      (response) => {
        console.log('Get All Users - ', response.message);
        this.usersSubject.next(response.payload)
      }
    )
  }

  getAllRegularContracts() {
    this.http.get<{ message: string, payload: Contract[] }>('http://localhost:8080/getAllRegularContracts').subscribe(
      (response) => {
        console.log('Get All Regular Contracts - ', response.message);
        this.regularContractsSubject.next(response.payload)
      }
    )
  }

  getAllVipContracts() {
    this.http.get<{ message: string, payload: Contract[] }>('http://localhost:8080/getAllVipContracts').subscribe(
      (response) => {
        console.log('Get All Vip Contracts - ', response.message);
        this.vipContractsSubject.next(response.payload)
      }
    )
  }

  addNewCard(card: PaymentCard) {
    const body = {
      id_tipa_platne_kartice: card.id_tipa_platne_kartice,
      id_korisnika: card.id_korisnika,
      datum_isteka: card.datum_isteka,
      broj_kartice: card.broj_kartice
    };
    this.http.post<any>('http://localhost:8080/addPaymentCard', body).subscribe(
      (response) => {
        console.log(response);
        console.log('Add New Payment Card - ', response.message);
        this.getAllCards();
      }
    )
  }

  addNewCardType(name: string, type: string) {
    const body = {
      new_payment_card: {
        naziv: name,
        vrsta_tipa: type
      }
    }
    this.http.post<any>('http://localhost:8080/addPaymentCardType', body).subscribe(
      (response) => {
        console.log('Add New Payment Card Type - ', response.message);
        this.getAllCardTypes();
      }
    )
  }
}
