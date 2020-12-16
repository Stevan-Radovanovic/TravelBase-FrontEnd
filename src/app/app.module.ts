import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ArrangementsComponent } from './arrangements/arrangements.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HotelsAndCitiesComponent } from './hotels-and-cities/hotels-and-cities.component';
import { ContractsComponent } from './contracts/contracts.component';
import { UsersAndCardsComponent } from './users-and-cards/users-and-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrangementsComponent,
    ReservationsComponent,
    HotelsAndCitiesComponent,
    ContractsComponent,
    UsersAndCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
