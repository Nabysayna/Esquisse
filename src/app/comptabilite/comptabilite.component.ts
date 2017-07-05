import { Component, OnInit } from '@angular/core';

class PdvCaisse{
	nom : string ;
	caisse : number ;
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
  estselectionf:number;

  constructor() { }

  ngOnInit() {
  	this.pdvCaisses = [{nom:"Fallou DIOP", caisse:20000}, {nom:"Khalifa GUEYE", caisse:500000}, {nom:"Naby DIOUF", caisse:10000}, {nom:"Moussa SYLL", caisse:1000}]
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

  ajoutercharges(i){

    this.estselectionf = i;
  }


}
