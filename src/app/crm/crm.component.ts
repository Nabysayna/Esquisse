import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

import { CrmServiceWeb, Portefeuille, Relance, Promotion, Prospection, Suivicommande } from '../webServiceClients/Crm/crm.service';





@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
	public relance:Relance[];
	public promotion:Promotion[];
	public prospection:Prospection[];
  public suivicommande:Suivicommande[];
	public portefeuille:Portefeuille[];
	private crmServiceWeb:CrmServiceWeb = new CrmServiceWeb();
    token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;


  filtre ="";
  nom="nom";
  asc="asc";


  constructor(
  		 private location: Location,
         private route:ActivatedRoute,
         private router: Router
         ) { }

  ngOnInit() {
    this.crmServiceWeb.portefeuille(this.token).then(crmserviceList => {
        this.portefeuille = crmserviceList;
        console.log(JSON.stringify(this.portefeuille));
      });  
  }



  relanceMeth(){
  	
  	this.crmServiceWeb.relance(this.token).then(crmserviceList => {
        this.relance = crmserviceList;
        console.log( JSON.stringify(this.relance));
      });

  }

  promotionMeth(){
  	this.crmServiceWeb.promotion(this.token).then(crmserviceList => {
		        this.promotion = crmserviceList;
		        console.log(JSON.stringify(this.promotion));
		      });
  }

  getNom(infosop : string ){
  	return JSON.parse(infosop).nom ;
  }

  getPrenom(infosop:string){
  	return JSON.parse(infosop).prenom;
  }

  getTelephone(infosop:string){
  	return JSON.parse(infosop).tel;
  }


  envoyersms(){}

  prospect(){ 

    this.crmServiceWeb.prospection(this.token).then(crmserviceList => {
        this.prospection = crmserviceList;
        console.log(JSON.stringify(this.prospection));
      });
  }

  commandes(){
    this.crmServiceWeb.suivicommande(this.token).then(crmserviceList => {
        this.suivicommande = crmserviceList;
        console.log(JSON.stringify(this.suivicommande));
      });
  }

  detail(){}


}
