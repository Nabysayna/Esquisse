import { Component, OnInit, NgZone} from '@angular/core';
import { EcomServiceWeb, Commande } from '../webServiceClients/ecom/ecom.service';
import * as sha1 from 'js-sha1';
import * as _ from "lodash";

class Article {
  public id:number;
  public nomImg:string;
  public designation:string;
  public description:string;
  public prix:number;
  public stock:number;
}

export class Vente {
  public id:number;
  public quantite:number;
  public designation:string;
  public prixUnitaire:number ;
  public tel:number;
  public fullName:string;
  public dateVente:string;
}



@Component({
  selector: 'app-espace-perso',
  templateUrl: './espace-perso.component.html', 
  styleUrls: ['./espace-perso.component.css']
})


export class EspacePersoComponent implements OnInit {

  articles:Article[][];
  ecomCaller: EcomServiceWeb;
  loading = false ;
  listeCommande : Commande[] ;
  listarticles : Article[] ;

  token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  nomImage : string ;
  categoriea : string ;
  designationa: string;
  descriptiona: string ;
  prixa:number;
  stocka:number;
  modif:string="-";
  modifart:string;

  uploadProgress: number;
  zone: NgZone;

  receivedArticles = "" ;
  articlesFournis = "" ;

  designation = "designation" ;
  asc = "asc" ;

  constructor() {
      this.ecomCaller = new EcomServiceWeb();
      this.zone = new NgZone({ enableLongStackTrace: false });
  }

  ngOnInit() { 
      this.loading = true ;
      this.ecomCaller.listeArticles(this.token, 'perso').then( response =>
        {
          this.articles = _.chunk(response, 5) ;
          this.listarticles = response;
          this.loading = false ;
        }); 
  }

 deleteArticle(article:Article) {      
      for(var j=0; j<this.articles.length; j++){
      	var ligne=this.articles[j];
      		for (var i=0; i<ligne.length; i++)
      			if (ligne[i].nomImg==article.nomImg)
      			{
      				console.log(JSON.stringify(ligne[i]));
      				ligne.splice(i,1);
      				break;
      			}
      }
  }
 
 filtre : string = "" ;

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


  ajouter(){ 
    this.loading = true ;

      let params = { token: this.token , designation: this.designationa, description:this.descriptiona, prix: this.prixa, stock:this.stocka, img_link: this.uploadFile.generatedName, categorie:this.categoriea }
      this.ecomCaller.ajouterArticle(params).then( response =>
        {
          console.log("Le serveur a répondu : "+response) ;
          console.log("L'image généré est : "+this.uploadFile.generatedName) ;
          this.designationa="";
          this.descriptiona="";
          this.prixa=0 ;
          this.stocka=0;
          this.loading = false ;
        }); 
  }


  chargerCommandes(typeListe : string){
    this.loading = true ;

    if (typeListe=='toReceive'){
      setTimeout(()=>{
      this.listeCommande = [ {id:1, quantite:2,designation:"Chaussures Homme", prixUnitaire:19000 , tel:77000000,fullName:"Bamba BBS", adress:"Diamalaye", dateCommande:"05/07/2017"}, {id:2, quantite:1, designation:"Chemise Homme", prixUnitaire:5000, tel:77008000, fullName:"Assane BBS", adress:"Keur Mbaye Fall",  dateCommande:"15/06/2017"}, {id:3, quantite:4, designation:"Sac Femme", prixUnitaire:1, tel:77000009, fullName:"Khady BBS", adress:"Parcelles", dateCommande:"28/05/2017"}] ;
      this.loading = false ;
      }, 500) ;
    }else{
      setTimeout(()=>{
      this.listeCommande = [ {id:1, quantite:2,designation:"Ordinateur Portable", prixUnitaire:190000 , tel:77000000,fullName:"Awa BBS", adress:"Ouest Foire", dateCommande:"05/07/2017"}, {id:2, quantite:4, designation:"Chaussettes", prixUnitaire:500, tel:77008000, fullName:"Naby BBS", adress:"Parcelles",  dateCommande:"15/06/2017"}] ;
      this.loading = false ;
      }, 500) ;
    }


/*    this.ecomCaller.listerCommandes(this.token, typeListe).then( response =>
      {
        //console.log("Le serveur a répondu : "+JSON.stringify(response)) ;
        this.listeCommande = response ;
        this.loading = false ;
      });    */

  }

  chargerVentes(){
     setTimeout(()=>{ this.listeCommande = [ {id:1, quantite:2,designation:"Soulier Homme", prixUnitaire:23000 , tel:77000000,fullName:"Bamba BBS", adress:"Diamalaye", dateCommande:"15/05/2017"}, {id:2, quantite:1, designation:"Chemise courtes manches", prixUnitaire:8000, tel:77008000, fullName:"Alioune BBS", adress:"Keur Mbaye Fall",  dateCommande:"15/06/2017"}, {id:3, quantite:4, designation:"Chaussures Femme", prixUnitaire:10000, tel:77000009, fullName:"Michelle BBS", adress:"Plateau", dateCommande:"28/05/2017"}] ;
      this.loading = false ;
      }, 500) ;
   }




  receptionner(idCommande : number){
    let params = {token: this.token, idCommande: idCommande};
    this.loading = true ;
    this.ecomCaller.receptionnerCommandes(params).then( response =>
      {
        if(response=="ok")
          console.log("Le serveur a répondu : "+response) ;
          this.receivedArticles = this.receivedArticles + "-"+idCommande.toString()+"-" ;
          this.loading = false ;
      });  
   }

  fournir(idCommande : number){
    let params = {token: this.token, idCommande: idCommande};
    this.loading = true ;
    this.ecomCaller.fournirCommandes(params).then( response =>
      {
        if(response=="ok")
          console.log("Le serveur a répondu : "+response) ;
          this.articlesFournis = this.articlesFournis + "-"+idCommande.toString()+"-" ;
          this.loading = false ;
      });  
   }


  receivedCmd(idCommande : number){
    return ( this.receivedArticles.indexOf("-"+idCommande.toString()+"-")>-1 ) ;
  }

  cmdFournis(idCommande : number){
    return ( this.articlesFournis.indexOf("-"+idCommande.toString()+"-")>-1 ) ;
  }


 modifArticle(article:Article){
    this.modif=article.nomImg; 
    this.modifart="record"+article.nomImg;
 }

  enregArticle(article: Article){
   this.modif="";
   this.modifart="";
   for(var j=0; j<this.articles.length; j++){
    var ligne=this.articles[j];
      for (var i=0; i<ligne.length; i++)
        if (ligne[i].nomImg==article.nomImg)
        {
          console.log("Nom image générée : "+this.uploadFile.generatedName) ;
          ligne[i].nomImg = this.uploadFile.originalName ;
          break;
        }
    }
  }

  annulArticle(){
    location.reload();

  }

 uploadFile: any;
  hasBaseDropZoneOver: boolean = false;

  options: Object = {
    url: 'http://localhost/EsquisseBackEnd/server-backend-upload/index.php'
  };

  sizeLimit = 2000000;

  handleUpload(data): void {
      this.zone.run(() => {this.uploadProgress = data.progress.percent;});

      if (data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('Le fichier est trop lourd!');
    }
  }

}
