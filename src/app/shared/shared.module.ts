import { AuthGuard } from './auth/auth.guard';
import { FlightResolver } from '../flight-booking/flight-edit/flight.resolver';
import { ExitGuard } from './exit/exit.guard';
import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./pipes/location.pipe";
import { LocationValidationDirective } from "./validation/location.validation.directive";
import { RoundTripValidationDirective } from "./validation/round-trip.validation.directive"; 
import { AsyncLocationValidationDirective } from "./validation/async-location.validation.directive"; 

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LocationPipe,
        LocationValidationDirective,
        RoundTripValidationDirective, 
        AsyncLocationValidationDirective 
    ],
    providers: [
        AuthGuard,
        AuthService, // { provide: AuthService, useClass: AuthService}
        ExitGuard,
        FlightResolver,
        
    ],
    exports: [
        LocationPipe,
        LocationValidationDirective,
        RoundTripValidationDirective, 
        AsyncLocationValidationDirective  
    ]
})
export class SharedModule { }