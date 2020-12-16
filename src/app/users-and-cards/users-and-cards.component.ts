import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users-and-cards',
  templateUrl: './users-and-cards.component.html',
  styleUrls: ['./users-and-cards.component.scss']
})
export class UsersAndCardsComponent implements OnInit, OnDestroy {

  cardsSubscription: Subscription;
  usersSubscription: Subscription;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllCards();
    this.service.getAllUsers();
    this.cardsSubscription = this.service.cardsSubject.subscribe((cards) => console.log(cards));
    this.usersSubscription = this.service.usersSubject.subscribe((users) => console.log(users));

  }

  ngOnDestroy() {
    this.cardsSubscription?.unsubscribe();
    this.usersSubscription?.unsubscribe();
  }

}
