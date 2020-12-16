import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrangementsComponent } from './arrangements/arrangements.component';
import { ContractsComponent } from './contracts/contracts.component';
import { HotelsAndCitiesComponent } from './hotels-and-cities/hotels-and-cities.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { UsersAndCardsComponent } from './users-and-cards/users-and-cards.component';

const routes: Routes = [
  { path: 'arrangements', component: ArrangementsComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'hotelsAndCities', component: HotelsAndCitiesComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'usersAndCards', component: UsersAndCardsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'arrangements' },
  { path: '**', redirectTo: 'arrangements' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
