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

      let params = { token: this.token , designation: this.designationa, description:this.descriptiona, prix: this.prixa, stock:this.stocka, img_link: this.uploadFile.generatedName }
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
    this.ecomCaller.listerCommandes(this.token, typeListe).then( response =>
      {
        //console.log("Le serveur a répondu : "+JSON.stringify(response)) ;
        this.listeCommande = response ;
        this.loading = false ;
      });     
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
    url: 'http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/index.php'
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
