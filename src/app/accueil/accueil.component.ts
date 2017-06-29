import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	
  registredAPIs : string [] = ['POSTECASH','JONI JONI', 'ORANGE MONEY', 'TIGO CASH', 'EXPRESSO', 'TNT BY BBS INVEST'] ;
  authorisedToUseCRM = false ;
  
  constructor() { }

  ngOnInit() {
  }

}
