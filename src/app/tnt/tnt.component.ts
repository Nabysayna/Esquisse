import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

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
  styleUrls: ['./tnt.component.css'],
})

export class TntComponent implements OnInit {
  verifierNumInput:string = '';
  verifierNumValide:boolean = false;
  verifierNumInputValide:boolean = true;
  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  loading = false ;


  prenomNewClient : string ; 
  nomNewClient: string ;
  telNewClient: string ;
  adresseNewClient: string ;
  regionNewClient: string ; 
  ncniNewClient: string ; 
  nchipNewClient: string ;
  ncarteNewClient: string ; 
  nbmNewClient: number; 
  tbouquetNewClient : string = 'Sans Abonnement';

	formvisible='';
	noma:string;
	prenoma:string;
	tela:string;
  nchip:string;
	ncarte:string;
	nbm:number;
	tbouquet:string;
	nAbonnement:NAbonnement;
	lAbonnement:LAbonnement;
	eFinancier:EFinancier;
  private tntCaller: TntServiceWeb ;
  public retourTntWS: {}[] ;
  private singleTntWS: TntResponse ;

  rowsOnPage = 7 ;
  sortBy = "prenom";
  orderByDate = 'date_abonnement' ;
  sortDateOrder = "desc";
  sortOrder = "asc";
  filtre = "" ;
  filtreDeco = "" ;
  filtreCarte = "" ;

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
        this.loading = true ;
    this.tntCaller.checkNumber(this.token, this.verifierNumInput).then( response =>
        { 
        this.singleTntWS = response ;
        this.noma = this.singleTntWS.nom ;
        this.prenoma = this.singleTntWS.prenom ;
        this.tela = this.singleTntWS.tel;
        this.nchip = this.singleTntWS.n_chip;
        this.ncarte = this.singleTntWS.n_carte;

        if (this.singleTntWS.id_typeabonnement=="1")
          this.tbouquet = "Maanaa";
        if (this.singleTntWS.id_typeabonnement=="2")
          this.tbouquet = "Boul Khool";
        if (this.singleTntWS.id_typeabonnement=="3")
          this.tbouquet = "Maanaa + Boul Khool";
  
        this.verifierNumValide = true;
        this.verifierNumInputValide = false;

        this.loading = false ;
    }); 
  }

  validnabon(){ 
    this.loading = true ; 
    this.verifierNumInputValide = true ;
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
         this.verifierNumValide = false ;
         this.verifierNumInputValide = true;
         this.loading = false ; 
        }

      });      
  }


  listerAbonnements(){
      this.loading = true ;

      this.tntCaller.listAbonnement(this.token).then( response =>
        {
          this.retourTntWS = response ;
          this.loading = false ;
          //console.log("response "+this.retourTntWS) ;
        }) ;  
  }

  listerVenteDeco(){
      this.loading = true ;

      this.tntCaller.listeVenteDecods(this.token).then( response =>
        {
          this.retourTntWS = response ;
          this.loading = false ;
          //console.log("response "+this.retourTntWS) ;
        }) ;  
  }

  listerVenteCarte(){
      this.loading = true ;

      this.tntCaller.listerVenteCartes(this.token).then( response =>
        {
          this.retourTntWS = response ;
          this.loading = false ;
          //console.log("response "+this.retourTntWS) ;
        }) ;  
  }



  vendreDecodeur(){ 
    this.loading = true ; 
    var typedebouquet : number ;
    var prix:number ;
    if(this.tbouquetNewClient == "Sans Abonnement"){
      typedebouquet=0;
      prix = 15000 ;
    }
    if(this.tbouquetNewClient == "+ 1 Mois"){
      typedebouquet=1;
      prix = 19500 ;
    }
    if(this.tbouquetNewClient == "+ 3 Mois"){
      typedebouquet=3;  
      prix = 28000 ; 
    }

   this.tntCaller.vendreDecodeur(this.token, this.prenomNewClient, this.nomNewClient, this.telNewClient, this.adresseNewClient, this.regionNewClient, this.ncniNewClient, this.nchipNewClient, this.ncarteNewClient, this.nbmNewClient, typedebouquet, prix).then( response =>
      {
        if(response=="ok"){
          this.reinitialiserVariables() ;
          this.loading = false ; 
        }

      });      
  }

  vendreCarte(){ 
     this.loading = true ; 

     this.tntCaller.vendreCarte(this.token, this.prenomNewClient, this.nomNewClient, this.telNewClient, this.adresseNewClient, this.regionNewClient, this.ncniNewClient, this.ncarteNewClient, 5000).then( response =>
        {
          if(response=="ok"){
            this.reinitialiserVariables() ;
            this.loading = false ; 
          }

        });      
  }



  reinitialiserVariables(){
      this.verifierNumValide = false ;
      this.prenomNewClient ="" ; 
      this.nomNewClient="" ;
      this.telNewClient="" ;
      this.adresseNewClient="" ;
      this.regionNewClient="" ; 
      this.ncniNewClient="" ; 
      this.nchipNewClient="" ;
      this.ncarteNewClient="" ; 
      this.nbmNewClient=0; 
      this.tbouquetNewClient="" ;
  }


}

