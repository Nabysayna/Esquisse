import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {HistoriqueOperations} from '../gestionreporting/gestionmodels';
import {HistoriqueOperationsService} from '../gestionreporting/gestionservice';
import {ArretCaisse} from '../gestionreporting/gestionmodels';
import {ArretCaisseService} from '../gestionreporting/gestionservice';

@Component({
  selector: 'app-gestionreporting',
  templateUrl: './gestionreporting.component.html',
  styleUrls: ['./gestionreporting.component.css']
})
export class GestionreportingComponent implements OnInit {


    historiqueOperations:HistoriqueOperations;
    arretCaisse:ArretCaisse;

  constructor(
  	 private arretCaisseService:ArretCaisseService,
  	 private historiqueOperationsService:HistoriqueOperationsService,
     private location: Location,
  	 private route:ActivatedRoute
  	) {}

  ngOnInit():void {

    this.route.params.subscribe( (params : Params) => { 
      this.historiqueOperations = this.historiqueOperationsService.getHistoriqueOperations(5);
    });

     this.route.params.subscribe( (params : Params) => { 
      this.arretCaisse = this.arretCaisseService.getArretCaisse(5);
    });


  }



}

