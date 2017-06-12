import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';


class Commandealiv {
	id:number;
	nom:string;
	prenom:string;
	tel:string;
	adr:string;
	prod:string;
	prix:number;
	choix:boolean;
	
	}
	class Commandearecup {
	id:number;
	nom:string;
	prenom:string;
	tel:string;
	adr:string;
	prod:string;
	prix:number;
	choix:boolean;
	
	}
	class Recouvr {
	id:number;
	nom:string;
	prenom:string;
	tel:string;
	adr:string;
	montant:number;
	choix:boolean;
	
	}

@Component({
  selector: 'app-admincoursier',
  templateUrl: './admincoursier.component.html',
  styleUrls: ['./admincoursier.component.css']
})
export class AdmincoursierComponent implements OnInit {

  recouvrement:Recouvr[];
	commandearecup:Commandearecup[];
	commandealivrer:Commandealiv[];
	coursier="";
	


	filtre="";

  constructor(
  		   private location: Location,
         private route:ActivatedRoute,
  	     private router: Router) { }

 ngOnInit():void {

   this.recouvrement= [{ id: 5, nom: 'ndiaye', prenom: 'naby', tel:"771111111", adr: "parcelles u24",  montant:200000, choix:false},
   { id: 2, nom: 'sarr', prenom: 'marieme', tel:"774444444", adr: "djily mbaye",  montant:350000, choix:false}];

   this.commandearecup= [{ id: 4, nom: 'ka', prenom: 'assane', tel:"772222222", adr: "keur mbaye fall",prod:"chaussures homme",  prix:17000, choix:false}];

   this.commandealivrer = [{ id: 6, nom: 'gning', prenom: 'bamba', tel:"776666666", adr: "diamalaye",prod:"montre couple",  prix:22000, choix:false}];
   
  }

  assigner(){
  	for (var i = this.commandealivrer.length - 1; i >= 0; i--) {
  		if(this.commandealivrer[i].choix)
  			console.log(JSON.stringify(this.commandealivrer[i]));
  	}

  	for (var i = this.commandearecup.length - 1; i >= 0; i--) {
  		if(this.commandearecup[i].choix)
  			console.log(JSON.stringify(this.commandearecup[i]));
  	}

  	for (var i = this.recouvrement.length - 1; i >= 0; i--) {
  		if(this.recouvrement[i].choix)
  			console.log(JSON.stringify(this.recouvrement[i]));
  	}



  	
  }

}


