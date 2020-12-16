import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  addingNewCard = false;
  addingNewType = false;

  addCardForm: FormGroup;
  addTypeForm: FormGroup;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.initializeForms();
    this.service.getAllCards();
    this.service.getAllUsers();
    this.service.getAllCardTypes();
    this.cardsSubscription = this.service.cardsSubject.subscribe((cards) => this.cards = cards);
    this.usersSubscription = this.service.usersSubject.subscribe((users) => this.users = users);
    this.typeSubscription = this.service.typeSubject.subscribe((types) => this.types = types);;
  }

  initializeForms() {
    this.addTypeForm = new FormGroup(
      {
        type: new FormControl(null),
        name: new FormControl(null)
      }
    )

    this.addCardForm = new FormGroup(
      {
        cardNumber: new FormControl(null),
        dateOfExpiry: new FormControl(null),
        user: new FormControl(null),
        cardType: new FormControl(null)
      }
    )
  }

  addNewCard() {
    const card: PaymentCard = {
      broj_kartice: this.addCardForm.get('cardNumber').value,
      datum_isteka: this.addCardForm.get('dateOfExpiry').value,
      id_tipa_platne_kartice: this.addCardForm.get('cardType').value,
      id_korisnika: this.addCardForm.get('user').value
    };
    this.service.addNewCard(card);
  }

  addNewCardType() {
    this.service.addNewCardType(
      this.addTypeForm.get('name').value,
      this.addTypeForm.get('type').value,
    )
  }

  switchAddingModeCards() {
    if (!this.addingNewCard) this.addingNewCard = true;
    this.addingNewType = false;
  }

  switchAddingModeTypes() {
    if (!this.addingNewType) this.addingNewType = true;
    this.addingNewCard = false;
  }

  ngOnDestroy() {
    this.cardsSubscription?.unsubscribe();
    this.usersSubscription?.unsubscribe();
    this.typeSubscription?.unsubscribe();
  }

}
