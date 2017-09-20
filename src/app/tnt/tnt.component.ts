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

  dataImpression:any;

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
    sessionStorage.removeItem('dataImpression');
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

          let montant:number = 0;
          if(typedebouquet == 1){
            montant = 5000 * this.nbm;
          }
          if(typedebouquet == 2){
            montant = 3000 * this.nbm;
          }
          if(typedebouquet == 3){
            montant = 8000 * this.nbm;
          }

          this.dataImpression = {
            apiservice:'tnt',
            service:'abonnement',
            infotransaction:{
              client:{
                prenom:this.prenoma,
                nom:this.noma,
                telephone:this.tela,
                chip:this.nchip,
                montant: montant,
                duree:this.nbm
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
         this.router.navigate(['accueil/impression']);
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

    console.log(this.nbmNewClient);
    this.dataImpression = {
      apiservice:'tnt',
      service:'ventedecodeur',
      infotransaction:{
        client:{
          prenom:this.prenomNewClient,
          nom:this.nomNewClient,
          telephone:this.telNewClient,
          chip:this.nchipNewClient,
          carte:this.ncarteNewClient,
          montant:prix,
        },

      },
    }

    this.tntCaller.vendreDecodeur(this.token, this.prenomNewClient, this.nomNewClient, this.telNewClient, this.adresseNewClient, this.regionNewClient, this.ncniNewClient, this.nchipNewClient, this.ncarteNewClient, this.nbmNewClient, typedebouquet, prix).then( response =>
      {
        if(response=="ok"){
          this.reinitialiserVariables() ;
          this.loading = false ;

          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }

      });
  }

  vendreCarte(){
     this.loading = true ;
    this.dataImpression = {
      apiservice:'tnt',
      service:'ventecarte',
      infotransaction:{
        client:{
          prenom:this.prenomNewClient,
          nom:this.nomNewClient,
          telephone:this.telNewClient,
          carte:this.ncarteNewClient,
          montant:5000,
        },

      },
    }

    this.tntCaller.vendreCarte(this.token, this.prenomNewClient, this.nomNewClient, this.telNewClient, this.adresseNewClient, this.regionNewClient, this.ncniNewClient, this.ncarteNewClient, 5000).then( response =>
        {
          if(response=="ok"){
            this.reinitialiserVariables() ;
            this.loading = false ;
            sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
            this.router.navigate(['accueil/impression']);
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

  print(idrecuimpression:string): void {
    let printContents, popupWin;
    printContents = document.getElementById(idrecuimpression).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
          <html>
              <head>
                  <title>BBS INVEST - SENTOOL</title>
                  <style>
                      //........Customized style.......
                  </style>
              </head>
              <body onload="window.print();window.close()">${printContents}
              </body>
          </html>`
    );
    popupWin.document.close();
  }


}

