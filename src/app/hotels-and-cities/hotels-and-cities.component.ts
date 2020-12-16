import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hotels-and-cities',
  templateUrl: './hotels-and-cities.component.html',
  styleUrls: ['./hotels-and-cities.component.scss']
})
export class HotelsAndCitiesComponent implements OnInit, OnDestroy {

  citiesSubscription: Subscription;
  hotelsSubscription: Subscription;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllRegularContracts();
    this.service.getAllVipContracts();
    this.citiesSubscription = this.service.citiesSubject.subscribe((cities) => console.log(cities));
    this.hotelsSubscription = this.service.hotelsSubject.subscribe((hotels) => console.log(hotels));

  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.hotelsSubscription?.unsubscribe();
  }


}
