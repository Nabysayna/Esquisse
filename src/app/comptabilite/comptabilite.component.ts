import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

import { ComptabiliteServiceWeb } from '../webServiceClients/Comptabilite/comptabilite.service';


class UserExploitation{
  nom : string;
  prenom : number;
  idpdv:number;
}

class PdvCaisse{
  nom : string ;
  caisse : number ;
  prenom : number ;
  id : number ;
  idpdv:number;
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
  dateajout:string;
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

class Designation{
  name:string;
  stock:number;
  prixunitaire:number;
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
  designationsService: Designation[] = [];
  nbreDesignation:number = 0;

  approvisionnement = "" ;
  estselectionne:number = -1;
  estselectionr:number;
  estselectionf:number;
  estselectionfff:number;
  estselectionas:number;
  estselectionms:number;
  estselectionss:number;
  montreautredesignation:number;
  estselectionmods:number = -1;

  estclickeJour = true;
  estclickeAnnee = false;
  estclickeIntervalle = false;
  
  charges:Charges[];
  revenus:Revenus[];
  exploitation:Exploitation[];
  supservice:Supservice[];

  usersExploitation:UserExploitation[];
  
  montantajoutecaisse:number;

  public checkModel:any = {jour: true, annee: false, intervalle: false};
  selectionannee:string;
  selectionjour:string;
  selectionintervalledateinit:string;
  selectionintervalleddatefinal:string;
  selectionintervalle:string;
  
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
    this.comptabiliteServiceWeb.listecaisse().then(adminmultipdvServiceWeb => {
      this.pdvCaisses = adminmultipdvServiceWeb.response; 
    });
  }

  estcheckModel(type: string){
    if(type == 'jour'){
      this.checkModel.jour = true;
      this.checkModel.annee = false;
      this.checkModel.intervalle = false;
      
      this.selectionannee = "";
      this.selectionintervalledateinit = "";
      this.selectionintervalleddatefinal = "";
    }
    else if(type == 'annee'){
      this.checkModel.jour = false;
      this.checkModel.annee = true;
      this.checkModel.intervalle = false;
    
      this.selectionjour = "";
      this.selectionannee = "2017";
      this.selectionintervalledateinit = "";
      this.selectionintervalleddatefinal = "";
    }
    else if(type == 'intervalle'){
      this.checkModel.jour = false;
      this.checkModel.annee = false;
      this.checkModel.intervalle = true;
    
      this.selectionjour = "";
      this.selectionannee = "";
    }
    else{
      this.checkModel.jour = true;
      this.checkModel.annee = false;
      this.checkModel.intervalle = false;
    
      this.selectionjour = "";
      this.selectionannee = "";
      this.selectionintervalledateinit = "";
      this.selectionintervalleddatefinal = "";
    }
    this.selectionintervalle="";
  }
  
  isActif(nomPdv : string) : boolean{
  	return (this.approvisionnement.indexOf("-"+nomPdv+"-")>-1) ;
  }

  approvisionnercaisse(idpdv: number){
  	this.approvisionnement="" ;
    this.comptabiliteServiceWeb.approvisionner(idpdv, this.montantajoutecaisse).then(adminmultipdvServiceWeb => {
      // console.log(adminmultipdvServiceWeb); 
    });
  }
  
  listercharges(i){
    this.estselectionne = i ;
    this.comptabiliteServiceWeb.listecharge(this.pdvCaisses[i].idpdv).then(adminmultipdvServiceWeb => {
      this.charges = adminmultipdvServiceWeb.response; 
    });
  }

  listerrevenus(i){
    this.estselectionr = i;
    this.estselectionne = i ;
    this.comptabiliteServiceWeb.listerevenu(this.pdvCaisses[i].idpdv).then(adminmultipdvServiceWeb => {
      this.revenus = adminmultipdvServiceWeb.response;
    });
  }

  ajoutercharges(i){
    this.estselectionf = i;
    this.estselectionne = i ;
  }

  validerajoutercharges(pdv){
    this.comptabiliteServiceWeb.ajoutcharge(this.libelleCharge, pdv.idpdv, this.service, this.montantCharge).then(adminmultipdvServiceWeb => {
      // console.log(adminmultipdvServiceWeb); 
    });
  }

  listeruserexploitation(){
    this.comptabiliteServiceWeb.userexploitation().then(adminmultipdvServiceWeb => {
      this.usersExploitation = adminmultipdvServiceWeb.response; 
    });
  }

  listerexploitation(i){
    this.estcheckModel("");
    this.estselectionne = i ;
    this.estselectionfff = i;
    let datenow = ((new Date()).toJSON()).split("T",2)[0];
    this.comptabiliteServiceWeb.exploitation(this.usersExploitation[i].idpdv, "jour", datenow).then(adminmultipdvServiceWeb => {
      this.exploitation = adminmultipdvServiceWeb.response;
    });
  }

  listerexploitationrecherche(idpdv){
    let datenow = ((new Date()).toJSON()).split("T",2)[0];
    this.comptabiliteServiceWeb.exploitation(idpdv, "jour", datenow).then(adminmultipdvServiceWeb => {
      this.exploitation = adminmultipdvServiceWeb.response;
    });
  }

  listerexploitationrechercheannee(idpdv){
    this.comptabiliteServiceWeb.exploitation(idpdv, "annee", this.selectionannee).then(adminmultipdvServiceWeb => {
      this.exploitation = adminmultipdvServiceWeb.response;
    });
  }

  listerexploitationparjour(idpdv){
    if(this.selectionjour != ""){
      this.comptabiliteServiceWeb.exploitation(idpdv, "jour", this.selectionjour).then(adminmultipdvServiceWeb => {
        this.exploitation = adminmultipdvServiceWeb.response;
      });
    }
  }

  listerexploitationparannee(idpdv){
    this.comptabiliteServiceWeb.exploitation(idpdv, "annee", this.selectionannee).then(adminmultipdvServiceWeb => {
      this.exploitation = adminmultipdvServiceWeb.response;
    });
  }

  listerexploitationintervalle(idpdv){
    if(this.selectionintervalledateinit && this.selectionintervalleddatefinal){
      this.selectionintervalle = this.selectionintervalledateinit+" "+this.selectionintervalleddatefinal;
      this.comptabiliteServiceWeb.exploitation(idpdv, "intervalle", this.selectionintervalle).then(adminmultipdvServiceWeb => {
        this.exploitation = adminmultipdvServiceWeb.response;
      });
    }
  }

  ajouterdesignation(){
    this.designationsService.push(new Designation());
  }

  ajouterservice(i){
    this.estselectionne = i ;
    this.estselectionas = i;
    this.service = null;
    this.designationsService = [];
    this.designationsService.push(new Designation());
  }

  goBack() {
    this.location.back();
  }

  modifierservice(i){
    this.estselectionne = i ;
    this.estselectionms = i;
  }

  supprimerservice(i){
    this.estselectionne = i;
    this.service = null;
    this.designationsService = [];
    this.comptabiliteServiceWeb.listeservice(this.pdvCaisses[i].id).then(adminmultipdvServiceWeb => {
      this.supservice = adminmultipdvServiceWeb.response; 
    });
  }

  effacerunedesignation(i){
    this.estselectionne = i ;
    this.estselectionss = i;
    this.designationsService = this.designationsService.filter(item => item !==this.designationsService[i]);
  }
  
  validerajouterservice(pdv:any){
    this.comptabiliteServiceWeb.ajoutservice(this.service, pdv.idpdv, ""+JSON.stringify(this.designationsService)).then(adminmultipdvServiceWeb => {
      // console.log(adminmultipdvServiceWeb); 
    });
  }

  validermodifierservice(pdv:any){
    this.comptabiliteServiceWeb.modifierservice(this.service, ""+JSON.stringify(this.designationsService), this.serviceamodifier().idservice).then(adminmultipdvServiceWeb => {
      // console.log(adminmultipdvServiceWeb); 
    });
  }
 
  deleteservice(supservice:Supservice) {      
    // console.log(supservice);
    this.comptabiliteServiceWeb.supprimerservice(supservice.idservice).then(adminmultipdvServiceWeb => {
      // console.log(adminmultipdvServiceWeb); 
    });
  }

  serviceamodifier(){
    return this.supservice[this.estselectionmods];
  }

  modifyservice(i)
  {
    this.estselectionne = i ;
    this.estselectionmods=i;
    this.service = this.supservice[i].services;
    this.designationsService = JSON.parse(this.supservice[i].design);
  }
  autredesignation(i){
    this.estselectionne = i ;
    this.montreautredesignation=i;
  }

  
}
