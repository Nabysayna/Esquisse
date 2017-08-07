import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Location }          from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { TestService } from '../test.service';

class OrderedArticle{
  idarticle:number;
  qte:number;
  prix:number;
  montant:number;
  designation:string;
  description:string;
  imagelink:string;
  pourvoyeur:number;
} 

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit  {
  title = 'panier works!';
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  montant: number = 0;
  listarticles: any;
  orderedarticles:OrderedArticle [] = [];

  alert: boolean = false;



  @ViewChild('childModalCommand') public childModalCommand:ModalDirective;
 
  constructor(private testServiceWeb: TestService, private location: Location) { }

  ngOnInit() {
    this.testServiceWeb.listerarticle().then(listarticleServiceWebList => {
      this.listarticles = listarticleServiceWebList.articles; 
      for (var i = 0; i < sessionStorage.length; i++) {
        let split = sessionStorage.key(i);
        let splits = split.split("_");
        if (splits.length == 3) {
          let idarticle = Number(splits[2]);
          let article = this.listarticles.find(function(article){
            return article.idarticle == idarticle;
          })
          if(article != undefined){
            this.montant +=  Number(sessionStorage.getItem(split)) * article.prix;
            let orderedarticle:OrderedArticle = {
              idarticle:idarticle,
              qte:Number(sessionStorage.getItem(split)),
              prix:article.prix,
              montant:Number(sessionStorage.getItem(split)) * article.prix,
              designation:article.designation,
              description:article.description,
              imagelink:article.imagelink,
              pourvoyeur:article.pourvoyeur
            };

            this.orderedarticles.push(orderedarticle);
            console.log(this.orderedarticles);
          }
        }
      }
    });
  }

  goBack(): void {
    this.location.back();
  }  

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
    this.testServiceWeb.ajoutcommandeecomoutsite(
      ""+JSON.stringify(this.orderedarticles), 
      this.nom, 
      this.prenom, 
      this.email, 
      this.telephone, 
      this.montant
    ).then(avisarticleServiceWebList => {
      // console.log(avisarticleServiceWebList);
    });
    this.hideChildModalCommand();
    this.orderedarticles = [];
    sessionStorage.clear();
    this.alert = true;
  }

  supprimerarticle(i){
    sessionStorage.removeItem("article_"+this.orderedarticles[i].designation+"_"+this.orderedarticles[i].idarticle);
    this.orderedarticles = this.orderedarticles.filter(item => item !==this.orderedarticles[i]);
    this.recalculmontant();
  }

  augmenterqte(i){
    this.orderedarticles[i].qte++;
    this.recalculmontant();
    sessionStorage.setItem('article_'+this.orderedarticles[i].designation+'_'+this.orderedarticles[i].idarticle, this.orderedarticles[i].qte+'');
  }

  diminuerqte(i){
    if(this.orderedarticles[i].qte>1){
      this.orderedarticles[i].qte--;
      this.recalculmontant();
      sessionStorage.setItem('article_'+this.orderedarticles[i].designation+'_'+this.orderedarticles[i].idarticle, this.orderedarticles[i].qte+'');
    }
  }

  recalculmontant(){
    this.montant = 0;
    for (var i = 0; i < this.orderedarticles.length; i++) {
      this.orderedarticles[i].montant = this.orderedarticles[i].qte * this.orderedarticles[i].prix;
      this.montant += this.orderedarticles[i].montant;
    }
  }
  
}
