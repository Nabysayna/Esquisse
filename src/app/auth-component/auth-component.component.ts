import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  userName = ''  ; 
  userPwd  = '' ; 
  fakevalues : boolean ;

  constructor() { 
  	this.fakevalues = true ;
  }

  ngOnInit() {
  }

 authentificate() {
  		if ( (this.userName =='gaayi') && (this.userPwd =='diarediale') ){
  			this.fakevalues = true ;
		    this.userName = ''  ; 
  			this.userPwd  = '' ; 
  		}
  		else{
  			this.fakevalues = false ;
		    this.userName = ''  ; 
  			this.userPwd  = '' ; 
  		}
  }

}
