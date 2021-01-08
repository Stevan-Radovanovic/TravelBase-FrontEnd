import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SwService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sw: SwService) {
    this.sw.setUpdates();
    this.sw.subscribeToPush();
  }

  title = 'Bases2-FrontEnd';





}
