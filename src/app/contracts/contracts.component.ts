import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  addingNewContract = false;
  addContractForm: FormGroup;


  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.service.getAllRegularContracts();
    this.service.getAllVipContracts();
    this.regularSubscription = this.service.regularContractsSubject.subscribe((regulars) => this.regularContracts = regulars);
    this.vipSubscription = this.service.vipContractsSubject.subscribe((vips) => this.vipContracts = vips);

  }

  initializeForm() {
    this.addContractForm = new FormGroup(
      {
        napomena: new FormControl(null),
        datum: new FormControl(null),
        popust_id: new FormControl(null),
      }
    )
  }

  addNewContract() {
    const contract: Contract = {
      napomena: this.addContractForm.get('napomena').value,
      datum: this.addContractForm.get('datum').value,
      id_popusta: this.addContractForm.get('popust_id').value,
    };
    this.service.addNewContract(contract);
  }

  switchAddingModeContracts() {
    if (!this.addingNewContract) this.addingNewContract = true;
  }


  ngOnDestroy() {
    this.regularSubscription?.unsubscribe();
    this.vipSubscription?.unsubscribe();
  }


}
