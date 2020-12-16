import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit, OnDestroy {

  reservationSubscription: Subscription;

  reservations: Reservation[] = [];
  displayedColumns = ["broj_noci", "datum", "prijava", "odjava", "naziv_aranzmana", "actions"];

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllReservations();
    this.reservationSubscription = this.service.reservationsSubject.subscribe((reservations) => this.reservations = reservations);
  }

  ngOnDestroy() {
    this.reservationSubscription?.unsubscribe();
  }
}
