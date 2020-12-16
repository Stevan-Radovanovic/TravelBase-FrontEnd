import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { PaymentCardType } from '../models/payment-card-type.model';
import { PaymentCard } from '../models/payment-card.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users-and-cards',
  templateUrl: './users-and-cards.component.html',
  styleUrls: ['./users-and-cards.component.scss']
})
export class UsersAndCardsComponent implements OnInit, OnDestroy {

  cardsSubscription: Subscription;
  usersSubscription: Subscription;
  typeSubscription: Subscription;

  cards: PaymentCard[] = [];
  users: User[] = [];
  types: PaymentCardType[] = [];

  displayedColumns1 = ['ime_korisnika', 'prezime_korisnika', 'broj_telefona', 'email'];
  displayedColumns2 = ['broj_kartice', 'datum_isteka', 'ime_korisnika'];
  displayedColumns3 = ['id_tipa_platne_kartice', 'naziv_tipa_platne_kartice'];

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllCards();
    this.service.getAllUsers();
    this.service.getAllCardTypes();
    this.cardsSubscription = this.service.cardsSubject.subscribe((cards) => this.cards = cards);
    this.usersSubscription = this.service.usersSubject.subscribe((users) => this.users = users);
    this.typeSubscription = this.service.typeSubject.subscribe((types) => this.types = types);;


  }

  ngOnDestroy() {
    this.cardsSubscription?.unsubscribe();
    this.usersSubscription?.unsubscribe();
    this.typeSubscription?.unsubscribe();
  }

}
