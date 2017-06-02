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

   designationa:String;
   prixa:number;
   modif:string="-";

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
 

 ajouter(){ }


 modifArticle(article:Article){
   
              this.modif=article.nomImg;
 }

<<<<<<< HEAD

valider(){}
=======
 uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost/dev-bbsinvest-plateform/EsquisseBackEnd/server-backend-upload/index.php'
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
      alert('File is too large');
    }
  }
>>>>>>> 7d0827a014a183d46aa12468c1e57946941460f9

}

