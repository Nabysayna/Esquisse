import { Component, OnInit} from '@angular/core';

export class Article {
	
  public nomImg:string;
	public designation:string;
	public prix:number;	
}

@Component({
  selector: 'app-espace-perso',
  templateUrl: './espace-perso.component.html', 
  styleUrls: ['./espace-perso.component.css']


})


export class EspacePersoComponent implements OnInit {

  articles:Article[][] =[[{nomImg:"n", designation:"Chaussures homme", prix:18000},{nomImg:"nf", designation:"Chaussures femme", prix:15000},{nomImg:"hs", designation:"soulier homme", prix:20000},{nomImg:"bha", designation:"basket homme", prix:13000}, {nomImg:"bbb", designation:"chaussures enfant", prix:8000}],
  [{nomImg:"mc", designation:"montre couple", prix:21000}]];

  listarticles = [{nomImg:"n", designation:"Chaussures homme", prix:18000},{nomImg:"nf", designation:"Chaussures femme", prix:15000},{nomImg:"hs", designation:"soulier homme", prix:20000},{nomImg:"bha", designation:"basket homme", prix:13000},{nomImg:"bbb", designation:"chaussures bb", prix:8000},{nomImg:"mc", designation:"montre couple", prix:21000}];

  designationa:String;
  prixa:number;
  modif:string="-";
  modifart:string;

  constructor() {}

  ngOnInit() {}

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


 ajouter(){ }


 modifArticle(article:Article){                        
  this.modif=article.nomImg; 
  this.modifart="record"+article.nomImg;
 }

  enregArticle(){
   this.modif="";
   this.modifart="";

  }

  annulArticle(){
    location.reload();

  }

 uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost/EsquisseBackEnd/web/server-backend-upload/index.php?nomImage=justForTheFun'
  };
  sizeLimit = 2000000;

  handleUpload(data): void {
    if (data && data.response) {
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

