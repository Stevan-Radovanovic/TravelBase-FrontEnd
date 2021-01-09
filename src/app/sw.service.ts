import { Injectable } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  readonly vapidPublicKey = "BKrUXmFqjDnnusQVXAR_ExPUMQxdyRn_9pkMt8lc7Ntw4A4SLFRtDkxnWy-expxHcXfiXlpMYktMFsPu8-H7CAg";
  pushSubscription: PushSubscription;

  constructor(private updates: SwUpdate, private push: SwPush) {

  }

  setUpdates() {
    console.log('Service Worker Active');
    if (!this.updates.isEnabled) return;
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

  subscribeToPush() {

    if (!this.push.isEnabled) return;
    this.push.requestSubscription({
      serverPublicKey: this.vapidPublicKey
    })
      .then((sub: PushSubscription) => {
        console.log('Push Subscription', sub);
        this.pushSubscription = sub;
      })
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}

