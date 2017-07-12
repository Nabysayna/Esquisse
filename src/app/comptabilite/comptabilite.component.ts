import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";


class PdvCaisse{
	nom : string ;
	caisse : number ;
}

class Charges{
  date:string;
  libelle:string;
  montant:number;
  service:string;

}

class Revenus{
  date:string;
  libelle:string;
  montant:number;
  service:string;

}

class Exploitation{
  designation:string;
  stocki:number;
  vente:number;
  stockf:number;
  mnt:number;
} 

 class Supservice{
  services:string;
  design:string;
} 




@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.css']
})
export class ComptabiliteComponent implements OnInit {
 
  pdvCaisses : PdvCaisse[] ;
  libelleCharge : string ;
  montantCharge : number ;
  service : string ;
  approvisionnement = "" ;
  estselection:number;
  estselectionr:number;
  estselectionf:number;
  estselectionfff:number;
  estselectionas:number;
  estselectionms:number;
  estselectionss:number;
  montreautredesignation:number;
  estselectionmods:number = -1;
  charges:Charges[];
  revenus:Revenus[];
  exploitation:Exploitation[];
  supservice:Supservice[];


  filtre ="";
  nom="nom";
  asc="asc";

  // infoSuperviseur:InfosPoint[];
  


  constructor(
         private location: Location,
         private route:ActivatedRoute,
         private router: Router) { }

  ngOnInit() {

    this.charges= [{ date: "03/03/2012", libelle: 'paiement électricité', montant: 2000000, service:"fonctionnement"},
                   { date: "04/06/2017", libelle: 'achat cartouche', montant: 1000000, service:"photocopie"}];
   
    this.revenus= [{ date: "03/03/2012", libelle: 'ventes de sac', montant: 20000, service:"commerce"},
                   { date: "04/06/2017", libelle: 'ventes de chaussures homme', montant: 18000, service:"commerce"}];
   
    this.exploitation= [{ designation: "chaussures", stocki: 24, vente:12 , stockf:12, mnt:20000},
                   {  designation: "sac", stocki:35 , vente:2 , stockf:33, mnt:15000}];

    this.supservice= [{ services: "saisir avec word", design: "traitement de texte"},
                   { services: "photocopie", design: "multiservice"}];  



  	this.pdvCaisses = [{nom:"Fallou DIOP", caisse:20000}, {nom:"Khalifa GUEYE", caisse:500000}, {nom:"Naby DIOUF", caisse:10000}, {nom:"Moussa SYLL", caisse:1000}];
    // let infosPoint={nomPoint:"Naby",chargesPoint:[{date:"12/12/2017", libelle:"retrait", montant:1200000, service:"postcash"}], revenusPoint:[{date:"11/01/2017", libelle:"ventes de sac", montant:20000}]};
    // this.infoSuperviseur[0]=infosPoint;
    // infosPoint={nomPoint:"Assane",chargesPoint:[{date:"12/12/2017", libelle:"envoie", montant:5200000, service:"tigocash"}], revenusPoint:[{date:"11/01/2017", libelle:"ventes de chaussures", montant:50000}]};
    // this.infoSuperviseur[1]=infosPoint;
  }

  isActif(nomPdv : string) : boolean{
  	return (this.approvisionnement.indexOf("-"+nomPdv+"-")>-1) ;
  }

  approvisionnercaisse(pdv : PdvCaisse){
  	this.approvisionnement="" ;
  }

  listercharges(i){
    this.estselection = i;
  }

  listerrevenus(i){
    this.estselectionr = i;
  }

  ajoutercharges(i){

    this.estselectionf = i;
  }

  listerventes(i){
    this.estselectionfff = i;

  }

  ajouterservice(i){
    this.estselectionas = i;

  }

  modifierservice(i){
    this.estselectionms = i;

  }

  supprimerservice(i){
    this.estselectionss = i;

  }
  
  serviceamodifier(){
    return this.supservice[this.estselectionmods];
  }

  modifyservice(i)
  {
    this.estselectionmods=i;

  }
  autredesignation(i){
    this.montreautredesignation=i;
  }
  

  ajtservice(){
    // Envoyer
  }
// calculresultat(){}
 
 deleteservice(supservice:Supservice) {      
      for(var j=0; j<this.supservice.length; j++){
        var ligne=this.supservice[j];
         
            if (ligne.services==supservice.services)
            {
              // console.log(JSON.stringify(ligne));
              this.supservice.splice(j,1);
              break;
            }
      
  }
}
}
