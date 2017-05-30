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
  verifierNumInput:string = '';
  verifierNumValide:boolean = false;
  verifierNumInputValide:boolean = true;
  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;

	formvisible='';
	noma:string;
	prenoma:string;
	tela:string;
	ncarte:string;
	nbm:number;
	tbouquet:string;
	nAbonnement:NAbonnement;
	lAbonnement:LAbonnement;
	eFinancier:EFinancier;
  private tntCaller: TntServiceWeb ;
  private retourTntWS: {}[] ;
  private singleTntWS: TntResponse ;

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

  validVerifierNum(){  
    this.tntCaller.checkNumber(this.token, this.verifierNumInput).then( response =>
        {
        this.singleTntWS = response ;
        this.noma = this.singleTntWS.nom ;
        this.prenoma = this.singleTntWS.prenom ;
        this.tela = this.singleTntWS.tel;
        this.ncarte = this.singleTntWS.n_carte;

        if (this.singleTntWS.id_typeabonnement=="1")
          this.tbouquet = "Maanaa";
        if (this.singleTntWS.id_typeabonnement=="2")
          this.tbouquet = "Boul Khool";
        if (this.singleTntWS.id_typeabonnement=="3")
          this.tbouquet = "Maanaa + Boul Khool";
  
        this.verifierNumValide = true;
        this.verifierNumInputValide = false;
    }); 
  }

  validnabon(){  
    var typedebouquet : number ;
    if(this.tbouquet == "Maanaa")
      typedebouquet=1;
    if(this.tbouquet == "Boul Khool")
      typedebouquet=2;
    if(this.tbouquet == "Maanaa + Boul Khool")
      typedebouquet=3;   

    if(this.singleTntWS.ncni==null)
      this.singleTntWS.ncni = "-" ;        

   this.tntCaller.abonner(this.token, this.prenoma, this.noma, this.tela, this.singleTntWS.adresse, this.singleTntWS.region, this.singleTntWS.city, this.singleTntWS.ncni, this.singleTntWS.n_chip, this.singleTntWS.n_carte, this.nbm, typedebouquet).then( response =>
      {
        if(response=="ok"){
        location.reload() ;
        }

      });      
  }


  listerAbonnements(){
      this.tntCaller.listAbonnement(this.token).then( response =>
        {
          this.retourTntWS = response ;
          //console.log("response "+this.retourTntWS) ;
        }) ;  
}

}

