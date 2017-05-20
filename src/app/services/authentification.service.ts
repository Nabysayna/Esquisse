import { Injectable } from '@angular/core';

import { CompteAccess } from '../models/compte-access';
import { CompteAccessMock } from '../mocks/compte-access.mock';
import { AuthentificationServiceWeb, AuthResponse } from '../webServiceClients/Authentification/authentification.service';


@Injectable()
export class AuthenticationService {
    public authentiService: AuthentificationServiceWeb;
    public token: string;
    public email: string;
    public access: boolean;
    constructor() {
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.authentiService = new AuthentificationServiceWeb();
    }

    login(email: string, password: string): Promise<string> {
      return new Promise( (resolve, reject)=> {
            this.authentiService.authentifier(email, password).then( response => { 
                var resp:AuthResponse=response ;
                console.log("Reponse du serveur : "+resp.reponse) ;
                if( resp.reponse.toString()== "true" ){
                    this.token = resp.token;
                    this.email = resp.prenom;
                    sessionStorage.setItem('currentUser', JSON.stringify({ username: this.email, token: this.token }));
                    console.log("Current user is : "+sessionStorage.getItem('currentUser'));
                    console.log(this.token);
                    resolve("pdv");
                } else {
                resolve('');
                }
            });
        });
    }

    logout(): void {
        this.token = null;
        sessionStorage.removeItem('currentUser');
    }
}