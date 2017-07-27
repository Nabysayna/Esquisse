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
  inforecvd = false ;
  postcmd = false ;
  prenom : string ;
  nom : string ;
  designation : string ;
  qte : number ;
  montant : number ;

  constructor() { }

  ngOnInit() {
  }

  initialize(){    
    this.codecmd = "" ;
    this.loading = false ;
    this.inforecvd = false ;
    this.postcmd = false ;
  }

  recupInfosCmd(){
  	console.log("Récupèration des informations relatives à la présente commande...") ;
    this.loading = true ;
    let requiredInfo = "infocmd#"+this.codecmd ;
    let paramObj={token : this.token, article : requiredInfo} ;
    this.ecomCaller.prendreCommande(paramObj).then( response =>
      { 
        response = response.replace(/WSServerBundle/gi,"") ;
        response = response.replace(/\\Entity\\/gi,"") ;
        response = response.replace(/Tmpcommande/gi,"") ;
        response = response.replace(/\\u0000/gi,"") ;
        response = response.replace(/\\/gi,"") ;

        this.infosCommande = JSON.parse(response) ;
        this.prenom = this.infosCommande.prenomclient ;
        this.nom  = this.infosCommande.nomclient ;
        this.designation = this.infosCommande.designation ;
        this.qte = this.infosCommande.qte ;
        this.montant = this.infosCommande.mntcmd ;
        this.loading = false ;
        this.inforecvd = true ;
      }); 
  }

  prendreCommande(){
    console.log("Récupèration des informations relatives à la présente commande...") ;
    this.loading = true ;
    let requiredInfo = "takecmd#"+this.codecmd ;
    let paramObj={token : this.token, article : requiredInfo} ;
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
        this.postcmd = true ;
      }); 
  }


}
