import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

import { ComptabiliteServiceWeb } from '../webServiceClients/Comptabilite/comptabilite.service';


class PdvCaisse{
	nom : string ;
  caisse : number ;
  prenom : number ;
	id : number ;
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
  idservice:number;
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
  designations: string;
  adesignations: string;

  approvisionnement = "" ;
  estselectionne:number;
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

  montantajoutecaisse:number;


  filtre ="";
  nom="nom";
  asc="asc";


  constructor(
         private location: Location,
         private route:ActivatedRoute,
         private router: Router,
         private comptabiliteServiceWeb: ComptabiliteServiceWeb,

  ) { }

  ngOnInit() {

    this.comptabiliteServiceWeb.listeservice('azrrtt').then(adminmultipdvServiceWeb => {
      this.supservice = adminmultipdvServiceWeb.response; 
    });
    this.comptabiliteServiceWeb.listecaisse('azrrtt').then(adminmultipdvServiceWeb => {
      this.pdvCaisses = adminmultipdvServiceWeb.response; 
    });
    this.comptabiliteServiceWeb.listecharge('azrrtt').then(adminmultipdvServiceWeb => {
      this.charges = adminmultipdvServiceWeb.response;
    });
    this.comptabiliteServiceWeb.listevente('azrrtt').then(adminmultipdvServiceWeb => {
      this.exploitation = adminmultipdvServiceWeb.response;
    });
    this.comptabiliteServiceWeb.listerevenu('azrrtt').then(adminmultipdvServiceWeb => {
      this.revenus = adminmultipdvServiceWeb.response;
    });
    
  }

  isActif(nomPdv : string) : boolean{
  	return (this.approvisionnement.indexOf("-"+nomPdv+"-")>-1) ;
  }

  approvisionnercaisse(idpdv: number){
  	this.approvisionnement="" ;
    this.comptabiliteServiceWeb.approvisionner('azrrtt', idpdv, this.montantajoutecaisse).then(adminmultipdvServiceWeb => {
      console.log(adminmultipdvServiceWeb); 
    });
  }

  
  listercharges(i){
    this.estselectionne = i;
  }

  listerrevenus(i){
    this.estselectionne = i;
  }

  ajoutercharges(i){
<<<<<<< HEAD

    this.estselectionne = i;
=======
    this.estselectionf = i;
    console.log(i);
>>>>>>> 5ae6851d8d8416742ec6549fceadceb45e84b410
  }

  validerajoutercharges(pdv){
    this.comptabiliteServiceWeb.ajoutcharge('azrrtt', this.libelleCharge, pdv.idUser, this.service, this.montantCharge).then(adminmultipdvServiceWeb => {
      console.log(adminmultipdvServiceWeb); 
    });
  }


  listerventes(i){
<<<<<<< HEAD
    this.estselectionne = i;

  }

  ajouterservice(i){
    this.estselectionne = i;

  }

  modifierservice(i){
    this.estselectionne = i;

=======
    this.estselectionfff = i;
  }

  ajouterservice(i){
    this.estselectionas = i;
  }

  modifierservice(i){
    this.estselectionms = i;
>>>>>>> 5ae6851d8d8416742ec6549fceadceb45e84b410
  }

  supprimerservice(i){
    this.estselectionne = i;

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

  validerajouterservice(pdv:any){
    console.log(pdv);
    let designation = this.designations;
    if( this.adesignations != undefined){
      designation = designation +'--'+ this.adesignations;
    }
    this.comptabiliteServiceWeb.ajoutservice('azrrtt', this.service, pdv.idUser, designation).then(adminmultipdvServiceWeb => {
      console.log(adminmultipdvServiceWeb); 
    });
  }

  validermodifierservice(){
    this.comptabiliteServiceWeb.modifierservice('azrrtt', this.serviceamodifier().services, this.serviceamodifier().idservice).then(adminmultipdvServiceWeb => {
      console.log(adminmultipdvServiceWeb); 
    });
  }
 
  deleteservice(supservice:Supservice) {      
    console.log(supservice);
    this.comptabiliteServiceWeb.supprimerservice('azrrtt', supservice.idservice).then(adminmultipdvServiceWeb => {
      console.log(adminmultipdvServiceWeb); 
    });
  }

}
