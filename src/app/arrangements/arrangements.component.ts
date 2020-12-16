import { Component, OnDestroy, OnInit } from '@angular/core';
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


  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllArrangements();
    this.arrangementSubscription = this.service.arrangementsSubject.subscribe((arrangements) => this.arrangements = arrangements);
  }

  ngOnDestroy() {
    this.arrangementSubscription?.unsubscribe();
  }

}
