import { Component, OnInit } from '@angular/core';

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
} 
class InfosPoint{
  nomPoint:string;
  chargesPoint:Charges[];
  revenusPoint:Revenus[];

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
  estselectionfr:number;
  infoSuperviseur:InfosPoint[];
  


  constructor() { }

  ngOnInit() {
  	this.pdvCaisses = [{nom:"Fallou DIOP", caisse:20000}, {nom:"Khalifa GUEYE", caisse:500000}, {nom:"Naby DIOUF", caisse:10000}, {nom:"Moussa SYLL", caisse:1000}];
    let infosPoint={nomPoint:"Naby",chargesPoint:[{date:"12/12/2017", libelle:"retrait", montant:1200000, service:"postcash"}], revenusPoint:[{date:"11/01/2017", libelle:"ventes de sac", montant:20000}]};
    this.infoSuperviseur[0]=infosPoint;
    infosPoint={nomPoint:"Assane",chargesPoint:[{date:"12/12/2017", libelle:"envoie", montant:5200000, service:"tigocash"}], revenusPoint:[{date:"11/01/2017", libelle:"ventes de chaussures", montant:50000}]};
    this.infoSuperviseur[1]=infosPoint;
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

  totalrevenus(i){
    this.estselectionfr = i;

  }
calculresultat(){

}
 

}
