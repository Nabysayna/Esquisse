import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {HistoriqueOperations} from '../gestionreporting/gestionmodels';
import {HistoriqueOperationsService} from '../gestionreporting/gestionservice';
import {ArretCaisse} from '../gestionreporting/gestionmodels';
import {ArretCaisseService} from '../gestionreporting/gestionservice';

import { ComptabiliteServiceWeb } from '../webServiceClients/Comptabilite/comptabilite.service';


@Component({
  selector: 'app-gestionreporting',
  templateUrl: './gestionreporting.component.html',
  styleUrls: ['./gestionreporting.component.css']
})
export class GestionreportingComponent implements OnInit {


    historiqueOperations:HistoriqueOperations;
    arretCaisse:ArretCaisse;

    caisseEtat: any;

  constructor(
  	 private arretCaisseService:ArretCaisseService,
  	 private historiqueOperationsService:HistoriqueOperationsService,
     private location: Location,
  	 private route:ActivatedRoute,

     private comptabiliteServiceWeb: ComptabiliteServiceWeb,
  	) {}

  ngOnInit():void {

    this.route.params.subscribe( (params : Params) => { 
      this.historiqueOperations = this.historiqueOperationsService.getHistoriqueOperations(5);
    });

     this.route.params.subscribe( (params : Params) => { 
      this.arretCaisse = this.arretCaisseService.getArretCaisse(5);
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

