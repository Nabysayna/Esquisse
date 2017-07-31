import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

import { CrmServiceWeb, Portefeuille, Relance, Promotion, Prospection, Suivicommande, Servicepoint } from '../webServiceClients/Crm/crm.service';





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
  public servicepoint:Servicepoint[];
  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  loading = false ;


  filtre ="";
  nom="nom";
  asc="asc";


  constructor(
  		   private location: Location,
         private route:ActivatedRoute,
         private router: Router,
         private crmServiceWeb:CrmServiceWeb
         ) { }


  ngOnInit() {
     
      this.crmServiceWeb.servicepoint(this.token).then(serviceptserviceList => {
        this.servicepoint = serviceptserviceList;
//        console.log(JSON.parse(this.servicepoint[0].designations)[0].name);
        console.log("reponse du serveur "+this.servicepoint);
        this.loading = false ;
      });
   
  }


  relanceMeth(){
    this.loading = true ;
  	
  	this.crmServiceWeb.relance(this.token).then(crmserviceList => {
        this.relance = crmserviceList;
        this.loading = false ;
      });

  }

  promotionMeth(){
      this.loading = true ;

  	this.crmServiceWeb.promotion(this.token).then(crmserviceList => {
		        this.promotion = crmserviceList;
	          this.loading = false ;
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

  prospect(){ 
      this.loading = true ;

    this.crmServiceWeb.prospection(this.token).then(crmserviceList => {
        this.prospection = crmserviceList;
          this.loading = false ;
      });
  }

  commandes(){
      this.loading = true ;

    this.crmServiceWeb.suivicommande(this.token).then(crmserviceList => {
        this.suivicommande = crmserviceList;
          this.loading = false ;
      });
  }

  prtflle(){
    this.loading = true ;
    

    this.crmServiceWeb.portefeuille(this.token).then(crmserviceList => {
        this.portefeuille = crmserviceList;
        this.loading = false ;
      });
  }

   mail(){}

   sms(){}

   appel(){}


  detail(){}

  envoyersms(){}



}
