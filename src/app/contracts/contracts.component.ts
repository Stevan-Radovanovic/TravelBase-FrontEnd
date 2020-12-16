import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, OnDestroy {

  regularSubscription: Subscription;
  vipSubscription: Subscription;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllCities();
    this.service.getAllHotels();
    this.regularSubscription = this.service.regularContractsSubject.subscribe((regulars) => console.log(regulars));
    this.vipSubscription = this.service.vipContractsSubject.subscribe((regulars) => console.log(regulars));

  }

  ngOnDestroy() {
    this.regularSubscription?.unsubscribe();
    this.vipSubscription?.unsubscribe();
  }


}
