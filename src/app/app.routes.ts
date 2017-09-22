import { BasketComponent } from './basket/basket.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FlightSearchComponent } from "./flight-booking/flight-search/flight-search.components";
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },
    /*
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    */
    /*
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    */
    {
        path: '**',
        redirectTo: 'home'
    }

];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);