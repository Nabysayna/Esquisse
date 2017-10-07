import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationServiceWeb, AuthResponse } from '../webServiceClients/Authentification/authentification.service';
import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-firstlog',
  templateUrl: './firstlog.component.html',
  styleUrls: ['./firstlog.component.css']
})
export class FirstlogComponent implements OnInit {
  fakevalues = true ;
  pwdactuel : string ;
  newpwd : string ;
  confirmpdw : string ;

  loading = false ;
  authentiService : AuthentificationServiceWeb ;

  constructor(private router: Router) { 
        this.authentiService = new AuthentificationServiceWeb();
  }

  ngOnInit() {
  }

  modifierPwd(){
  	if (this.confirmpdw!=this.newpwd)

  	this.loading = true ;
    this.authentiService.modifierpwdinit(this.pwdactuel, this.newpwd).then( resp=>
      {
        this.router.navigate(['']); 
	  	this.loading = false ;
      }); 

  }

}
