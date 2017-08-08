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
  phase2fakevalues : boolean = true ;
  saisietoken : string ;
  loading = false ;
  phase1 = true ;

  chaine : string ;

  l1: string ;
  l2: string ; 
  l3: string ;
  l4: string ;
  c1: string ;
  c2: string ; 
  c3: string ; 
  c4: string ; 

  fromSMS : string ;
  backstring : string = "" ;
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
        if(access  != "rejected"){
          this.loading = false ;
          this.phase1 = false ;
          this.chaine = access ;
          this.l1 =  this.chaine.split(" ")[0].split("--")[0] ;
          this.l2 =  this.chaine.split(" ")[1].split("--")[0] ; 
          this.l3 =  this.chaine.split(" ")[2].split("--")[0] ;
          this.l4 =  this.chaine.split(" ")[3].split("--")[0] ;

          this.c1 =  this.chaine.split(" ")[0].split("--")[1] ;
          this.c2 =  this.chaine.split(" ")[1].split("--")[1]; 
          this.c3 =  this.chaine.split(" ")[2].split("--")[1] ; 
          this.c4 =  this.chaine.split(" ")[3].split("--")[1]; 

        }else{
          this.fakevalues = false ;
          this.userName = ''  ; 
          this.userPwd  = '' ; 
          this.loading = false ;
        }
      });
  }

  authentificateBySMS(){
    this.loading = true ;
    this.authenticationService.loginPhase2(this.fromSMS).then( access=>
      { 
       if ( access === 3 ){
          this.router.navigate(['/accueil']); 
        }else 
          if ( access === 2 ){
            this.router.navigate(['/accueiladmpdv']);  
          }else 
            if ( access === 1 ){
              this.router.navigate(['/accueiladmmpdv']);              
            }else 
            if ( access === 5 ){
              this.router.navigate(['/accueilcoursier']);              
            }
            else 
            if ( access === 4 ){
              this.router.navigate(['/accueiladmincoursier']);              
            }
            else 
            if ( access === 6 ){
              this.router.navigate(['/accueiladmincommercial']);              
            }
             else 
            if ( access === 7 ){
              this.router.navigate(['/accueilcommercial']);              
            }
             else
                if ( access === 4 ){
                  this.router.navigate(['/ADMINCOURSIER']);              
                }else{
                  this.phase2fakevalues = false ;
                  this.fromSMS = ''  ; 
              }  

        this.loading = false ; 
      });


  }

}