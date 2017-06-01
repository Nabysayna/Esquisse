import { Component, OnInit } from '@angular/core';


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

	articles:Article[][] =[[{nomImg:"n", designation:"Chaussures homme", prix:18000},{nomImg:"nf", designation:"Chaussures femme", prix:15000},{nomImg:"hs", designation:"soulier homme", prix:20000}],
   [{nomImg:"bha", designation:"basket homme", prix:13000},{nomImg:"bbb", designation:"chaussures enfant", prix:8000},{nomImg:"mc", designation:"montre couple", prix:21000}]];

	img : string [] = ['n','nf', 'bb', 'hs', 'fs', 'es','bha','bfa','bea','bbb','mc'] ;
	desig : string [] = ['Chaussures homme','Chaussures femme', 'Chaussures enfant', 'soulier homme', 'soulier enfant', 'soulier femme','basket homme','basket femme','basket enfant','chaussures bb','montre couple'] ;
	prix : string [] = ['18000','15000', '10000', '20000', '12000', '18000','13000','11000','9000','8000','21000'] ;


  constructor() { }

  ngOnInit() {
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
 

 ajouter(){

 }

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

}

