import { Injectable } from '@angular/core';

import { CompteAccess } from '../models/compte-access';
import { CompteAccessMock } from '../mocks/compte-access.mock';


@Injectable()
export class AuthenticationService {
    public token: string;
    constructor() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email: string, password: string): string {
        let access: CompteAccess = CompteAccessMock.find(user => (user.email === email) && (user.password === password));
        let token = access  && access.token;
        if (access) {
            this.token = token;
            localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            console.log(token);
            return access.role;
        } else {
            return '';
        }
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}