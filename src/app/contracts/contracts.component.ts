import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Contract } from '../models/contract.model';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, OnDestroy {

  regularSubscription: Subscription;
  vipSubscription: Subscription;

  regularContracts: Contract[] = [];
  vipContracts: Contract[] = [];
  displayedColumns = ["datum", "iznos", "napomena"];


  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllRegularContracts();
    this.service.getAllVipContracts();
    this.regularSubscription = this.service.regularContractsSubject.subscribe((regulars) => this.regularContracts = regulars);
    this.vipSubscription = this.service.vipContractsSubject.subscribe((vips) => this.vipContracts = vips);

  }

  ngOnDestroy() {
    this.regularSubscription?.unsubscribe();
    this.vipSubscription?.unsubscribe();
  }


}
