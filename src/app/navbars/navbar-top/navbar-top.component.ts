import { Component, OnInit } from '@angular/core';
import { AuthentificationServiceWeb } from '../../webServiceClients/Authentification/authentification.service';
import { Router } from '@angular/router';
import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {
  authentiService: AuthentificationServiceWeb;

	currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  constructor(private router: Router) { 
    this.authentiService = new AuthentificationServiceWeb();
  }

  ngOnInit() {}
  
  deconnexion(){
  	this.authentiService.deconnecter(sha1(JSON.parse(sessionStorage.getItem('currentUser')).baseToken+sha1("bay3k00_f1_n10un") )).then( response => {
  	 if (response==1){
  			sessionStorage.removeItem('currentUser');
	        this.router.navigate(['']);
  	 } else
  	 	console.log("Echec deconnexion!") ;

  	 }) ; 
  }

}
