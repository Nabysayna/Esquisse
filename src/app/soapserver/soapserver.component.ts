import { Component, OnInit } from '@angular/core';
import { TntServiceWeb, TntResponse } from '../webServiceClients/Tnt/Tnt.service';


@Component({
  selector: 'app-soapserver',
  templateUrl: './soapserver.component.html',
  styleUrls: ['./soapserver.component.css']
})

export class SoapserverComponent implements OnInit {

  public resp : string  ;
  public tntCaller: TntServiceWeb;
  public retourTntWS: TntResponse[] ;

  constructor() {
        this.tntCaller = new TntServiceWeb();
   }

   ngOnInit() {
      this.tntCaller.listAbonnement(1, "assane").then( response =>
        {this.retourTntWS = response  }); 
   }

}
