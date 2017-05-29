import { Injectable } from '@angular/core';

import { CompteAccess } from '../models/compte-access';
import { CompteAccessMock } from '../mocks/compte-access.mock';
import { AuthentificationServiceWeb, AuthResponse } from '../webServiceClients/Authentification/authentification.service';


@Injectable()
export class AuthenticationService {
    authentiService: AuthentificationServiceWeb;
    public baseToken: string;
    public email: string;
    public accessLevel: number;
    public authorizedApis: string;

    constructor() {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.baseToken = currentUser && currentUser.baseToken;
        this.authentiService = new AuthentificationServiceWeb();
    }

    login(email: string, password: string): Promise<number> {
      return new Promise( (resolve, reject)=> {
            this.authentiService.authentifier(email, password).then( response => { 
                var resp:AuthResponse=response ;
                console.log("Reponse du serveur : "+resp.reponse) ;
                if( resp.reponse.toString()== "true" ){
                    this.baseToken = resp.baseToken;
                    this.email = resp.prenom;
                    this.accessLevel = resp.accessLevel;
                    this.authorizedApis = resp.authorizedApis;

                    sessionStorage.setItem('currentUser', JSON.stringify({ username: this.email, baseToken: this.baseToken, authorizedApis:this.authorizedApis, accessLevel:this.accessLevel}));
                    console.log("Current user is : "+sessionStorage.getItem('currentUser'));
                    console.log(this.baseToken);
                    resolve(this.accessLevel);
                } else {
                    resolve(0);
                }
            });
        });
    }

    logout(): void {
        this.baseToken = null;
        sessionStorage.removeItem('currentUser');
    }
}