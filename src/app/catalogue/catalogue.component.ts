import { Component, OnInit } from '@angular/core';
import { EcomServiceWeb } from '../webServiceClients/ecom/ecom.service';
import * as _ from "lodash";

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
  listarticles : Article[] ;
  filtre : string = "" ;
  saisieInfosClient = false ;
  orderedArticle : Article ;
  prenomClient = "" ;
  nomClient = "" ;
  qteCmd : number ;
  telClient : number ;
  constructor() { 
        this.ecomCaller = new EcomServiceWeb();
  }

  ngOnInit() {
      this.loading = true ;
      this.ecomCaller.listeArticles(this.token, 'catalogue').then( response =>
        {
          this.articles = _.chunk(response, 5) ;
          this.listarticles = response;
          this.loading = false ;
        }); 
  }

  prendreCommande(article){
    this.orderedArticle = article ;
    this.saisieInfosClient = true ;
  }

  commanderArticle(){
    let article = this.orderedArticle ;
    this.loading = true ;
    this.saisieInfosClient = false ;
    let params = { token: this.token , id_article:article.id, quantite: this.qteCmd, prenomclient: this.prenomClient, nomclient: this.nomClient,telclient: this.telClient } ;
    this.ecomCaller.commander(params).then( response =>
      {
        console.log("Le serveur a répondu : "+response) ;
        alert("Votre commande a bien été passée!") ;
        this.prenomClient="";
        this.nomClient="";
        this.telClient=0;
        this.loading = false ;
      });  
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
          for (var i=0; i<ligne.length; i++)
            if (this.repondAuFiltre(ligne[i]))
            {
              ligneCopy[k]=ligne[i];
              k=k+1 ;
            }
          catalogueApresFiltre.push(ligneCopy) ;
        }
        return catalogueApresFiltre ;
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


}
