import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  userName = ''  ; 
  userPwd  = '' ; 
  fakevalues : boolean ;

  constructor(private router: Router) { 
  	this.fakevalues = true ;
    
  }

  ngOnInit() {
  }

 authentificate() {
  		if ( ((this.userName =='gaayi') && (this.userPwd =='diarediale')) || ((this.userName =='test') && (this.userPwd =='test')) ){
  			// this.fakevalues = true ;
		   //  this.userName = ''  ; 
  			// this.userPwd  = '' ;
        this.router.navigate(['/accueil']); 
  		}
  		else{
  			this.fakevalues = false ;
		    this.userName = ''  ; 
  			this.userPwd  = '' ; 
  		}
  }

}
