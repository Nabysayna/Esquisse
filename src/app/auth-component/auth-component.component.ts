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
  loading = false ;

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
    this.loading = true ;
    this.authenticationService.login(this.userName, this.userPwd).then(access=>
      {
        this.loading = false ;
      	if ( access === 3 ){
          this.router.navigate(['/accueil']); 
      	}else 
          if ( access === 2 ){
            this.router.navigate(['/accueiladmpdv']);  
          }else 
            if ( access === 1 ){
              this.router.navigate(['/accueiladmmpdv']);              
            }
      	     else
                if ( access === 4 ){
                  this.router.navigate(['/ADMINCOURSIER']);              
                }else{
                  console.log("One the else statement") ;
        	     		this.fakevalues = false ;
      		        this.userName = ''  ; 
        			    this.userPwd  = '' ; 
        		  }
      });
  }

}