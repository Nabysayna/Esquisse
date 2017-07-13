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
  noms:string;
  prenoms:string;
  tels:number;
  service:string;
  echeance:string;
} 

class Promotion{
  noms:string;
  prenoms:string;
  tels:number;
  periofidel:string;
  service:string;
} 

class Prospection{
  noms:string;
  prenoms:string;
  tels:number;
} 

class Suivicommande{
  noms:string;
  prenoms:string;
  pointderecup:string;
  mntcommande:number;
  detail:string;
  etat:string;
 }

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
	portefeuille:Portefeuille[];
	relance:Relance[];
	promotion:Promotion[];
	prospection:Prospection[];
	suivicommande:Suivicommande[];

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

  	this.relance= [{noms:"Sarr", prenoms:"fatou", tels:772222222, service:"assurance", echeance:"08/04/2017"},
  						{noms:"khady", prenoms:"ndiaye", tels:772233332, service:"commerce", echeance:"02/03/2017"}];

    this.promotion= [{noms:"Diagne", prenoms:"Awa", tels:772222222, periofidel:"journalier", service:"e-commerce"},
  						{noms:"Sall", prenoms:"Michelle", tels:772233332, periofidel:"3", service:"assurance"}];

  	this.prospection= [{noms:"ka", prenoms:"Assane", tels:772222222},
  						{noms:"Sarr", prenoms:"Maguette", tels:772233332}];

    this.suivicommande= [{noms:"badiane", prenoms:"charly", pointderecup:"dimalaye villa 188E", mntcommande:20000, detail:"vente de chaussures homme", etat:"reçu"},
  						{noms:"sané", prenoms:"jacob", pointderecup:"brioche dorée diamalaye", mntcommande:10000, detail:"vente maillot enfant", etat:"en attente"}];



  }

  relanceMeth(){}

  promotionMeth(){}

  envoyersms(){}

  detail(){}


}
