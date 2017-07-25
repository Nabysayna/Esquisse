import { Component, OnInit } from '@angular/core';
import { EcomServiceWeb, Commande } from '../webServiceClients/ecom/ecom.service';
import * as sha1 from 'js-sha1';
import * as _ from "lodash";

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})

export class ECommerceComponent implements OnInit {
  codecmd = "" ;
  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  loading = false ;
  ecomCaller = new EcomServiceWeb();
  infosCommande : any ;
  constructor() { }

  ngOnInit() {
  }

  recupInfosCmd(){
  	console.log("Récupèration des informations relatives à la présente commande...") ;
    this.loading = true ;
    let paramObj={token : this.token, article :this.codecmd}
    this.ecomCaller.prendreCommande(paramObj).then( response =>
      { 
        response = response.replace(/WSServerBundle/gi,"") ;
        response = response.replace(/\\Entity\\/gi,"") ;
        response = response.replace(/Commandes/gi,"") ;
        response = response.replace(/\\u0000/gi,"") ;
        response = response.replace(/\\/gi,"") ;

        this.infosCommande = JSON.parse(response) ;
        this.codecmd = "";
        this.loading = false ;
      }); 
  }

}
