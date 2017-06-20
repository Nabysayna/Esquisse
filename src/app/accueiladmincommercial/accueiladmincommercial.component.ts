import { Component, OnInit } from '@angular/core';
import { CommercialServiceWeb } from '../webServiceClients/Commercial/commercial.service';

@Component({
  selector: 'app-accueiladmincommercial',
  templateUrl: './accueiladmincommercial.component.html',
  styleUrls: ['./accueiladmincommercial.component.css']
})
export class AccueiladmincommercialComponent implements OnInit {


	 registredAPIs : string [] = ['ADMIN COMMERCIAL'] ;
  	 authorisedToUseCRM = false ;

  constructor( private commercialServiceWeb:CommercialServiceWeb) { }

  ngOnInit():void  {
  	 this.commercialServiceWeb.listcoursier('dyjt','gdty').then(postcashwebserviceList => {
        console.log(postcashwebserviceList);
      });
  }

}
