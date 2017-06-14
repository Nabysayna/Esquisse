import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueiladmincommercial',
  templateUrl: './accueiladmincommercial.component.html',
  styleUrls: ['./accueiladmincommercial.component.css']
})
export class AccueiladmincommercialComponent implements OnInit {


	 registredAPIs : string [] = ['ADMIN COMMERCIAL'] ;
  	 authorisedToUseCRM = false ;

  constructor() { }

  ngOnInit() {
  }

}
