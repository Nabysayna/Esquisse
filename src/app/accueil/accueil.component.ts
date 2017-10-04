import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	
  registredAPIs : string [] = ['POSTECASH', 'ORANGE MONEY', 'TIGO CASH', 'TNT BY EXCAF'] ;
  //registredAPIs : string [] = ['POSTECASH', 'TNT BY EXCAF'] ;
  authorisedToUseCRM = false ;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('currentUser')) 
       this.router.navigate(['']);   
  }

}
