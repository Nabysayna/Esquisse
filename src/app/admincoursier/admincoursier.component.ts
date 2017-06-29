import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import { EcomServiceWeb, Commande, Coursier } from '../webServiceClients/ecom/ecom.service';
import * as sha1 from 'js-sha1';
import * as _ from "lodash";


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
	
class CmCheck{
	id:number;
	isChecked:boolean;	
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
	commandearecup:Commande[];
	commandealivrer:Commande[];
	coursier="" ;
	coursiers : Coursier[] ;
	ecomCaller: EcomServiceWeb = new EcomServiceWeb();
	loading = false ;
	listeCommande : Commande[] ;
	token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
	filtre="";

	zones : string[] =  ['Dakar','Pikine','Rufisque','Yoff','Guédiawaye','Parcelles Assainies'] ;

	nom = "nom" ;
	asc = "asc" ;

	checker : CmCheck[] = [] ;

	constructor(
			   private location: Location,
	     private route:ActivatedRoute,
		     private router: Router) { }

	ngOnInit(){

	this.recouvrement= [{ id: 5, nom: 'ndiaye', prenom: 'naby', tel:"771111111", adr: "parcelles u24",  montant:200000, choix:false},
	{ id: 2, nom: 'sarr', prenom: 'marieme', tel:"774444444", adr: "djily mbaye",  montant:350000, choix:false}];
		
		this.loading = true ;
		this.ecomCaller.listerCoursier(this.token).then( response =>
		  {
		    console.log("Le serveur a répondu : "+JSON.stringify(response)) ;
		    this.loading = false ;
		    this.coursiers = response; 
		  });     

	}

	assigner(){

/*		for (var i = this.commandearecup.length - 1; i >= 0; i--) {
			if ( _.find(this.checker, { 'id': this.commandearecup[i].id}) ) 
				console.log(JSON.stringify(this.commandearecup[i]));
		} */

		for (var i = this.commandealivrer.length - 1; i >= 0; i--) {
			if ( _.find(this.checker, { 'id': this.commandealivrer[i].id}) ) 
				console.log(JSON.stringify(this.commandealivrer[i]));
		}

/*		for (var i = this.recouvrement.length - 1; i >= 0; i--) {
			if ( _.find(this.checker, { 'id': this.recouvrement[i].id}) ) 
				console.log(JSON.stringify(this.recouvrement[i]));
		} */
	}

	checkThisCmd(isChecked : boolean, cmdId : number){
		if(isChecked){
			this.checker.push({id : cmdId, isChecked : isChecked})
		}else
		if ( _.find(this.checker, { 'id': cmdId}) ) 
			this.checker = _.filter( this.checker, function(o) { return o.id!=cmdId } );
	}


	chargerCommandesDeliver(typeListe : string){
		this.loading = true ;
		this.ecomCaller.listerCommandes(this.token, typeListe).then( response =>
		  {
		    //console.log("Le serveur a répondu : "+JSON.stringify(response)) ;
		    this.commandearecup = response ;
		    this.loading = false ;
		  });     
	}


	chargerCommandesRecep(typeListe : string){
		this.loading = true ;
		this.ecomCaller.listerCommandes(this.token, typeListe).then( response =>
		  {
		    //console.log("Le serveur a répondu : "+JSON.stringify(response)) ;
		    this.commandealivrer = response ;
		    this.loading = false ;
		  });     
	}


}


