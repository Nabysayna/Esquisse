import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { EcomServiceWeb } from '../webServiceClients/ecom/ecom.service';
import * as _ from "lodash";


class OrderedArticle{
  public id:number;
  public qte:number;
  public prix:number;
  public montant:number;
  public designation:string;
  public description:string;
  public nomImg:string;
} 


class Article {
  public id:number;
  public nomImg:string;
  public designation:string;
  public description:string;
  public prix:number;
  public stock:number;
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  

  public ecomCaller: EcomServiceWeb;
  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  loading = false ;

  articles:Article[][] ;
  listarticles : any ;
  filtre : string = "" ;

  montant:number = 0;
  orderedarticles:OrderedArticle [] = [];
    
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  alert: boolean = false;


  constructor() { 
    this.ecomCaller = new EcomServiceWeb();
  }

  ngOnInit() {
      this.loading = true ;
      this.ecomCaller.listeArticles(this.token, 'catalogue').then( response => {
        this.articles = _.chunk(response, 5) ;
        this.listarticles = response;
        this.loading = false ;
      }); 
  }

  selectionnerarticle(article: Article){
    let existe = this.orderedarticles.find(function(item){
      return article.id == item.id;
    })
    if(existe == undefined){
      let orderedarticle:OrderedArticle = {
        id:article.id,
        qte:1,
        prix:article.prix,
        montant:article.prix,
        designation:article.designation,
        description:article.description,
        nomImg: article.nomImg,
      };
      this.orderedarticles.push(orderedarticle);
      this.recalculmontant();
    }
    else{
      this.orderedarticles = this.orderedarticles.filter(item => item.id!==article.id);
      this.recalculmontant();

    }
    console.log(this.orderedarticles);
  }


  filtrerCatalogue() : Article[][] {
    let catalogueApresFiltre : Article[][] = [] ;
    if (this.filtre=="" || this.filtre==null)
      return this.articles ;
    else
      for(var j=0; j<this.articles.length; j++){
        var ligne=this.articles[j] ;
        let ligneCopy : Article[] = [] ;
        let k : number = 0 ;
        for (var i=0; i<ligne.length; i++){
          if (this.repondAuFiltre(ligne[i]))
          {
            ligneCopy[k]=ligne[i];
            k=k+1 ;
          }
          catalogueApresFiltre.push(ligneCopy) ;
        }
        return catalogueApresFiltre ;
      }
  }

 repondAuFiltre(article : Article) : boolean {
    if (this.filtre=="" || this.filtre==null)
      return true ;
    else
      if ( (article.nomImg.toLowerCase().match( this.filtre.toLowerCase() )!=null) || (article.designation.toLowerCase().match( this.filtre.toLowerCase() )!=null) ) 
          return true ;
      else
          return false ;    
  }


  supprimerarticle(article){
    this.orderedarticles = this.orderedarticles.filter(item => item.id!==article.id);
    this.recalculmontant();
  }
  augmenterqte(i){
    if(this.orderedarticles[i].qte) {
      this.orderedarticles[i].qte++;  
      this.recalculmontant();
    }
    else {
      this.orderedarticles[i].qte++;
      this.recalculmontant();
    }
  }
  diminuerqte(i){
    if(this.orderedarticles[i].qte>1){
      this.orderedarticles[i].qte--;
      this.recalculmontant();
    }
  }
  recalculmontant(){
    this.montant = 0;
    for (var i = 0; i < this.orderedarticles.length; i++) {
      this.orderedarticles[i].montant = this.orderedarticles[i].qte * this.orderedarticles[i].prix;
      this.montant += this.orderedarticles[i].montant;
    }
  }
  

  @ViewChild('childModalCommand') public childModalCommand:ModalDirective;

  public showChildModalCommand():void { 
    this.childModalCommand.show();
  }

  public hideChildModalCommand():void {  this.childModalCommand.hide(); 
    this.nom = null;
    this.prenom = null;
    this.telephone = null;
    this.email = null;
  }

  public commander():void {
    console.log(""+JSON.stringify(this.orderedarticles) +" "+ this.montant +" "+ this.prenom);
    let params = { 
      token: this.token , 
      orderedarticles:""+JSON.stringify(this.orderedarticles), 
      montant: this.montant, 
      prenomclient: this.prenom, 
      nomclient: this.nom, 
      telephoneclient: this.telephone, 
      emailclient: this.email 
    };
    this.ecomCaller.commander(params).then( response => {
      console.log("Le serveur a répondu : "+response) ;
    });  
    this.hideChildModalCommand();
    this.orderedarticles = [];
  }

  public viderordered(){
    this.orderedarticles = [];
  }

}
