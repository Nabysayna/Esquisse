import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {NAbonnementService} from '../tnt/tntservices';
import {NAbonnement} from '../tnt/tntmodels';
import {LAbonnementService} from '../tnt/tntservices';
import {LAbonnement} from '../tnt/tntmodels';
import {EFinancierService} from '../tnt/tntservices';
import {EFinancier} from '../tnt/tntmodels';
import { TntServiceWeb, TntResponse } from '../webServiceClients/Tnt/Tnt.service';

@Pipe({name: 'dataToArray'})
export class DataToArray implements PipeTransform{
  transform(value){
    return Array.from(value) ;
  }
}

@Component({
  selector: 'app-tnt',
  templateUrl: './tnt.component.html',
  styleUrls: ['./tnt.component.css']
})

export class TntComponent implements OnInit {
	formvisible='';
	noma:string;
	prenoma:string;
	tela:number;
	ncarte:number;
	nbm:number;
	tbouquet:string;
	nAbonnement:NAbonnement;
	lAbonnement:LAbonnement;
	eFinancier:EFinancier;
  private tntCaller: TntServiceWeb ;
  private retourTntWS: {}[] ;

  constructor(
  	     private eFinancierService:EFinancierService,
  	     private lAbonnementService: LAbonnementService,
  	  	 private nAbonnementService: NAbonnementService,
  		   private location: Location,
         private route:ActivatedRoute,
  	     private router: Router) { }

  ngOnInit():void {

    this.tntCaller = new TntServiceWeb();

    this.route.params.subscribe( (params : Params) => { 
      this.nAbonnement = this.nAbonnementService.getNAbonnement(5);
    });

      this.route.params.subscribe( (params : Params) => { 
      this.lAbonnement = this.lAbonnementService.getLAbonnement(5);
    });


      this.route.params.subscribe( (params : Params) => { 
      this.eFinancier = this.eFinancierService.getEFinancier(5);
    });

  }

validnabon(){}
listerAbonnements(){
      this.tntCaller.listAbonnement(1, "assane").then( response =>
        {
          this.retourTntWS = response ;
          console.log("response "+this.retourTntWS) ;
        }) ;  
}

}

