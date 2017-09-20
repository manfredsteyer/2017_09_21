import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "../flight-search/flight-search.components";
import { FlightCardComponent } from "../flight-search/flight-card.component";
import { ReactiveFlightSearchComponent } from "../reactive-flight-search/reactive-flight-search.components";
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";
import { FlightSearchRouterModule } from "../flight-search/flight-search.routes";

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
        FlightCardComponent
    ],
    providers: [],
    exports: [
        ReactiveFlightSearchComponent,
        FlightSearchComponent
    ]
})
export class FlightSearchModule { }