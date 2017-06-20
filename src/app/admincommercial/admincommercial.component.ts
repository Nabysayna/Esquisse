import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';


class Operateurs {
	id:number;
	nom:string;
	prenom:string;
	tel:string;
	adr:string;
	qualification:string;
	choix:boolean;
	
	}

	class RvOperateurs {
	id:number;
	nom:string;
	prenom:string;
	tel:string;
	adr:string;
	nomag:string;
	etat:string;

	
	}

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.css']
})
export class AdmincommercialComponent implements OnInit {

  
	operateurs:Operateurs[];
	rvoperateurs:RvOperateurs[];

  filtre ="";

  constructor(
  		   private location: Location,
         private route:ActivatedRoute,
  	     private router: Router) { }

  ngOnInit():void {

  	 this.operateurs= [{ id: 5, nom: 'ndiaye', prenom: 'naby', tel:"771111111", adr: "parcelles u24", qualification:"",choix:false},
   { id: 2, nom: 'sarr', prenom: 'marieme', tel:"774444444", adr: "djily mbaye", qualification:"", choix:false},
   { id: 3, nom: 'ka', prenom: 'assane', tel:"777777777", adr: "keur mbaye fall", qualification:"", choix:false}];


  	 this.rvoperateurs= [{ id: 5, nom: 'ndiaye', prenom: 'naby', tel:"771111111", adr: "parcelles u24", nomag:"kane amath",etat:"effectif"},
   { id: 2, nom: 'sarr', prenom: 'marieme', tel:"774444444", adr: "djily mbaye", nomag:"dia mouhamed",etat:"programmé"},
   { id: 3, nom: 'ka', prenom: 'assane', tel:"777777777", adr: "keur mbaye fall", nomag:"diouf luc",etat:"annulé"}];


  
  }

  enregistrer(){
  	for (var i = this.operateurs.length - 1; i >= 0; i--) {
  		if(this.operateurs[i].choix)
  			console.log(JSON.stringify(this.operateurs[i]));
  	}	
  }

  valider(){
  	for (var i = this.rvoperateurs.length - 1; i >= 0; i--) {
  		
  			console.log(JSON.stringify(this.rvoperateurs[i]));
  	}

  }

  assigner(){
  	for (var i = this.operateurs.length - 1; i >= 0; i--) {
  		if(this.operateurs[i].choix)
  			console.log(JSON.stringify(this.operateurs[i]));
  	}
  }

}
