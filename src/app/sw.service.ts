import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private updates: SwUpdate) {

  }

  setUpdates() {
    console.log('Service Worker Active');
    this.updates.available.subscribe(event => {
      console.log('Current version is', event.current);
      console.log('Available version is', event.available);
      alert('New Version Located - Reloading...');
      setTimeout(() => {
        window.location.reload();
      }, 3000);

    });

    this.updates.activated.subscribe(event => {
      console.log('Old version was', event.previous);
      console.log('New version is', event.current);
    });
  }
}
