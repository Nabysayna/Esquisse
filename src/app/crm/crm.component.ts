import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

class Portefeuille{
  nom:string;
  prenom:string;
  tel:number;
  periodicite:string;
  fidelite:number;
} 

class Relance{
  nom:string;
  prenom:string;
  tel:number;
  service:string;
  echeance:string;
} 

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
	portefeuille:Portefeuille[];
	relance:Relance[];

  filtre ="";
  nom="nom";
  asc="asc";

  constructor(
  		 private location: Location,
         private route:ActivatedRoute,
         private router: Router) { }

  ngOnInit() {
  	this.portefeuille= [{nom:"Ndiaye", prenom:"naby", tel:772222222, periodicite:"journalier", fidelite:8},
  						{nom:"ndiaye", prenom:"khady", tel:772233332, periodicite:"hebdomadaire", fidelite:1}];

  	this.relance= [{nom:"Sarr", prenom:"fatou", tel:772222222, service:"assurance", echeance:"08/04/2017"},
  						{nom:"khady", prenom:"ndiaye", tel:772233332, service:"commerce", echeance:"02/03/2017"}];

  }

}
