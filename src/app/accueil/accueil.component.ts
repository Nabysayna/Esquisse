import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	
  registredAPIs : string [] = ['PosteCash','Joni Joni', 'Orange Money', 'Tigo Cash', 'Western Union', 'MoneyGram', 'RYA'] ;
  authorisedToUseCRM = false ;
  
  constructor() { }

  ngOnInit() {
  }

}
