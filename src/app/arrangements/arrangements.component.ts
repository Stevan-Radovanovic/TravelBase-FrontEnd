import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Arrangement } from '../models/arrangement.model';

@Component({
  selector: 'app-arrangements',
  templateUrl: './arrangements.component.html',
  styleUrls: ['./arrangements.component.scss']
})
export class ArrangementsComponent implements OnInit, OnDestroy {

  arrangementSubscription: Subscription;

  arrangements: Arrangement[] = [];
  displayedColumns = ["naziv_aranzmana", "cena_nocenja", "actions"];


  editingArrangement = false;
  editArrangementForm: FormGroup;
  selectedArrangement: Arrangement;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.service.getAllArrangements();
    this.arrangementSubscription = this.service.arrangementsSubject.subscribe((arrangements) => this.arrangements = arrangements);
  }

  initializeForm() {
    this.editArrangementForm = new FormGroup(
      {
        name: new FormControl(null),
      }
    )
  }

  editArrangement() {
    this.service.updateArrangement(this.editArrangementForm.get('name').value.toString(), this.selectedArrangement.id_aranzmana);
  }

  switchEditingModeReservations(arr) {
    if (!this.editingArrangement) this.editingArrangement = true;
    this.selectedArrangement = arr;
    this.editArrangementForm.controls['name'].setValue(this.selectedArrangement.naziv_aranzmana);
  }


  ngOnDestroy() {
    this.arrangementSubscription?.unsubscribe();
  }

}
