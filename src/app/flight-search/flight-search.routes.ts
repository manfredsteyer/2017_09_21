import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { FlightSearchComponent } from "../flight-search/flight-search.components";
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";


const FLIGHT_SEARCH_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    }
];

export const FlightSearchRouterModule = RouterModule.forChild(FLIGHT_SEARCH_ROUTES);