import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit, OnDestroy {

  reservationSubscription: Subscription;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllReservations();
    this.reservationSubscription = this.service.reservationsSubject.subscribe((reservations) => console.log(reservations));
  }

  ngOnDestroy() {
    this.reservationSubscription?.unsubscribe();
  }
}
