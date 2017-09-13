import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	
  registredAPIs : string [] = ['POSTECASH','JONI JONI', 'ORANGE MONEY', 'TIGO CASH', 'EXPRESSO', 'TNT BY EXCAF'] ;
  //registredAPIs : string [] = ['POSTECASH', 'TNT BY EXCAF'] ;
  authorisedToUseCRM = false ;
  
  constructor() {   }

  ngOnInit() {
  }

}
