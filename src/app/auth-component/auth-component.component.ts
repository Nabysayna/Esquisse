import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentification.service';


@Component({
  moduleId: module.id,
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  userName = ''  ; 
  userPwd  = '' ; 
  fakevalues : boolean ;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) 
  { 
  	this.fakevalues = true ;
  }


  ngOnInit() {
    this.authenticationService.logout();
  }

    
  authentificate() {
    this.authenticationService.login(this.userName, this.userPwd).then(access=>
      {
      	if ( access === "pdv" ){
          this.router.navigate(['/accueil']); 
      	}else if ( access === "admin-pdv" ){
          this.router.navigate(['/accueiladmpdv']);  
        }else if ( access === "admin-mult-pdv" ){
          this.router.navigate(['/accueiladmmpdv']);              
        }
      	else{
      			this.fakevalues = false ;
    		    this.userName = ''  ; 
      			this.userPwd  = '' ; 
      		}
      });
  }

}