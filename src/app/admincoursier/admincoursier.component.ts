import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import { EcomServiceWeb, Commande, Coursier } from '../webServiceClients/ecom/ecom.service';
import * as sha1 from 'js-sha1';
import * as _ from "lodash";

class CmCheck{
	id:number;
	isChecked:boolean;	
}

@Component({
  selector: 'app-admincoursier',
  templateUrl: './admincoursier.component.html',
  styleUrls: ['./admincoursier.component.css']
})
export class AdmincoursierComponent implements OnInit {

	commandearecup:Commande[];
	commandealivrer:Commande[];
	coursier="" ;
	coursiers : Coursier[] ;
	ecomCaller: EcomServiceWeb = new EcomServiceWeb();
	loading = false ;
	listeCommande : Commande[] ;
	token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
	filtre="";

	zones : string[] =  [] ;
	zone : string ;
	nom = "nom" ;
	asc = "asc" ;

	checker : CmCheck[] = [] ;

	constructor(
			   private location: Location,
	     private route:ActivatedRoute,
		     private router: Router) { }

	ngOnInit(){
		this.loading = true ;
		this.ecomCaller.listerCoursier(this.token).then( response =>
		  {
		    this.loading = false ;
		    this.coursiers = response; 
		  });     

	}


/** Assigner récupèration depuis fournisseur */

	assignerfourn(){
		for (var i = this.commandealivrer.length - 1; i >= 0; i--) {
			if ( _.find(this.checker, { 'id': this.commandealivrer[i].id}) ) 
				console.log("Commandes assignées à : "+this.coursier);
				//console.log(JSON.stringify(this.commandealivrer[i]));
		}
	}


/** Assigner livraison vers point de récupèration */

	assignerpdr(){
		for (var i = this.commandearecup.length - 1; i >= 0; i--) {
			if ( _.find(this.checker, { 'id': this.commandearecup[i].id}) ) 
				console.log("Commandes assignées à : "+this.coursier);
//				console.log(JSON.stringify(this.commandearecup[i]));
		}
	}

	checkThisCmd(isChecked : boolean, cmdId : number){
		if(isChecked){
			this.checker.push({id : cmdId, isChecked : isChecked})
		}else
		if ( _.find(this.checker, { 'id': cmdId}) ) 
			this.checker = _.filter( this.checker, function(o) { return o.id!=cmdId } );
	}

/** Commandes à récuperer chez les fournisseur*/

	chargerCommandesDeliver(typeListe : string){
		this.loading = true ;
		this.ecomCaller.listerCommandes(this.token, typeListe).then( response =>
		  {
		    this.commandealivrer = JSON.parse(response) ;
		    let mergedTabs = [] ; 
		    for(var i =  this.commandealivrer.length - 1; i >= 0; i--){
		    	mergedTabs = mergedTabs.concat( JSON.parse(this.commandealivrer[i].orderedArticles) ) ;
		    }

		    for(var i =  mergedTabs.length - 1; i >= 0; i--){
		    	if( this.zones.indexOf(mergedTabs[i].zone)==-1 )
			    	this.zones.push(mergedTabs[i].zone) ;
		    } 

		    this.loading = false ;
		  });     
	}


	getOrderedArticle(orderedArticles){
		return JSON.parse(orderedArticles) ;
	}

	getSousZonesSupplier(){
		let souszones : string[] = [] ;
		if(this.zone){
			if(this.commandealivrer){
			    for(var i =  this.commandealivrer.length - 1; i >= 0; i--){
			    	let orderdArticles = JSON.parse(this.commandealivrer[i].orderedArticles) ;
				    for(var j =  orderdArticles.length - 1; j >= 0; j--){
				    	if(orderdArticles[j].zone==this.zone)
				    		if( souszones.indexOf(orderdArticles[j].souszone)==-1 ){
				    			souszones.push(orderdArticles[j].souszone) ; 
			    		}
					}
				}
			}
		}
		return souszones ;
	}

	getSousZonesRecPoint(){
		let souszones : string[] = [] ;
		if(this.zone){
			if(this.commandearecup){
			    for(var i =  this.commandearecup.length - 1; i >= 0; i--){
			    	if(JSON.parse(this.commandearecup[i].pointderecuperation).zone==this.zone)
			    		if( souszones.indexOf(JSON.parse(this.commandearecup[i].pointderecuperation).souszone)==-1 ){
			    		souszones.push(JSON.parse(this.commandearecup[i].pointderecuperation).souszone) ; 
			    	}
				}
			}

		}

		return souszones ;
	}

/** Commandes à acheminer aux point de récupèration*/

	chargerCommandesRecep(typeListe : string){
		this.loading = true ;
		this.ecomCaller.listerCommandes(this.token, typeListe).then( response =>
		  {
		    this.commandearecup = JSON.parse(response) ;
		    let mergedTabs = [] ; 
		    for(var i =  this.commandearecup.length - 1; i >= 0; i--){
		    	mergedTabs = mergedTabs.concat( JSON.parse(this.commandearecup[i].orderedArticles) ) ;
		    	let pdr = JSON.parse(this.commandearecup[i].pointderecuperation) ;
		    	if( this.zones.indexOf(pdr.zone)==-1 )
			    	this.zones.push(pdr.zone) ;
		    }

		    this.loading = false ;
		  });     
	}

	getAdressFournisseur(){
	}

	getAdressLivraison(pointderecuperation){
		return JSON.parse(pointderecuperation).address ;
	}

}


