import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Arrangement } from '../models/arrangement.model';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit, OnDestroy {

  reservationSubscription: Subscription;

  reservations: Reservation[] = [];
  arrangements: Arrangement[] = [];
  displayedColumns = ["broj_noci", "datum", "prijava", "odjava", "naziv_aranzmana", "actions"];

  addingNewReservation = false;
  addReservationForm: FormGroup;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.service.getAllReservations();
    this.reservationSubscription = this.service.reservationsSubject.subscribe((reservations) => this.reservations = reservations);
    this.service.getAllArrangements();
    this.reservationSubscription = this.service.arrangementsSubject.subscribe((arrangements) => this.arrangements = arrangements);
  }

  initializeForm() {
    this.addReservationForm = new FormGroup(
      {
        datum: new FormControl(null),
        prijava: new FormControl(null),
        odjava: new FormControl(null),
        broj_noci: new FormControl(null),
        aranzman: new FormControl(null)
      }
    )
  }

  addNewReservation() {
    const reservation: Reservation = {
      datum: this.addReservationForm.get('datum').value,
      prijava: this.addReservationForm.get('prijava').value,
      odjava: this.addReservationForm.get('odjava').value,
      broj_noci: this.addReservationForm.get('broj_noci').value,
      id_aranzmana: this.addReservationForm.get('aranzman').value,
    };
    this.service.addNewReservation(reservation);
  }

  switchAddingModeReservations() {
    if (!this.addingNewReservation) this.addingNewReservation = true;
  }

  ngOnDestroy() {
    this.reservationSubscription?.unsubscribe();
  }
}
