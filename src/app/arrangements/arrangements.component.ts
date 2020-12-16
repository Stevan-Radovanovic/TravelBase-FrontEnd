import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-arrangements',
  templateUrl: './arrangements.component.html',
  styleUrls: ['./arrangements.component.scss']
})
export class ArrangementsComponent implements OnInit, OnDestroy {

  arrangementSubscription: Subscription;

  constructor(public service: AppService) { }

  ngOnInit(): void {
    this.service.getAllArrangements();
    this.arrangementSubscription = this.service.arrangementsSubject.subscribe((arrangements) => console.log(arrangements));
  }

  ngOnDestroy() {
    this.arrangementSubscription?.unsubscribe();
  }

}
