import { OAuthService } from 'angular-oauth2-oidc';
import { constants } from 'os';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    // userName: string;

    get userName() {
        let claims =  this.oauthService.getIdentityClaims();
        if (!claims) return null;
        console.debug('claims', claims);
        return claims['given_name'];
    }

    constructor(private oauthService: OAuthService) {
    }

    login(): void {
        this.oauthService.initImplicitFlow();
    }

    logout(): void {
        this.oauthService.logOut();
    }

}