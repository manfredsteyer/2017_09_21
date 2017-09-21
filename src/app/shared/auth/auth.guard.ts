import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router, 
        private authService: AuthService) { 

        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        console.debug('route.data', route.data);

        if (!this.authService.userName) {
            this.router.navigate(['home', {plsLoginNow: true}])
        }
        return true;
    }
}