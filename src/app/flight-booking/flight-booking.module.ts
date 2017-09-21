import { FlightBookingComponent } from './flight-booking.component';
import { PassengerSearchComponent } from '../passenger-search/passenger-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.components';
import { FlightSearchRouterModule } from './flight-booking.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFlightSearchComponent } from "../reactive-flight-search/reactive-flight-search.components";
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,        
        FlightSearchRouterModule,
        SharedModule
    ],
    declarations: [
        ReactiveFlightSearchComponent,
        PassengerSearchComponent,
        FlightSearchComponent,
        FlightCardComponent,
        FlightEditComponent,
        FlightBookingComponent

],
    providers: [],
    exports: [
        ReactiveFlightSearchComponent,
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }