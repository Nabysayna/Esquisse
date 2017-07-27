import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

import {GestionreportingServiceWeb} from '../webServiceClients/Gestionreporting/gestionreporting.service';

export class Gestionreporting{
                          date:string;
                          operateur:string;
                          traitement:string;
                          montant:number;
                        } 


import { ComptabiliteServiceWeb } from '../webServiceClients/Comptabilite/comptabilite.service';


@Component({
  selector: 'app-gestionreporting',
  templateUrl: './gestionreporting.component.html',
  styleUrls: ['./gestionreporting.component.css']
})
export class GestionreportingComponent implements OnInit {

  public gestionreporting:Gestionreporting[];

  private gestionreportingServiceWeb:GestionreportingServiceWeb = new GestionreportingServiceWeb();
  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  loading = false ;

    nom="";
    asc="";
    filtre:"";

    caisseEtat: any;

  constructor(
     private location: Location,
  	 private route:ActivatedRoute,

     private comptabiliteServiceWeb: ComptabiliteServiceWeb,
  	) {}

  ngOnInit():void {


  }

  histop(){
     this.loading = true ;

        this.gestionreportingServiceWeb.gestionreporting(this.token).then(gestreportserviceList => {
        this.gestionreporting = gestreportserviceList;
        console.log(JSON.stringify(this.gestionreporting));
        this.loading = false ;
      });
      }


  etatcaisse(){
    console.log('test');
    this.comptabiliteServiceWeb.etatcaisse().then(adminmultipdvServiceWeb => {
      this.caisseEtat = adminmultipdvServiceWeb.response;
      console.log(adminmultipdvServiceWeb.response); 
    });
  }

  validerapprovision(idcaisse){
    this.comptabiliteServiceWeb.validerapprovisionn(idcaisse).then(adminmultipdvServiceWeb => {
      console.log(adminmultipdvServiceWeb.response); 
    });
  }

}

