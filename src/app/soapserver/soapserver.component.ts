import { Component, OnInit } from '@angular/core';
import { PostCashServiceWeb } from '../webServiceClients/PostcashClient/Postcash.service';


@Component({
  selector: 'app-soapserver',
  templateUrl: './soapserver.component.html',
  styleUrls: ['./soapserver.component.css']
})

export class SoapserverComponent implements OnInit {

  public resp : string  ;
  public postcashcaller: PostCashServiceWeb;
  public retourAuthentif:{} = {"return":{"_":{"type":"ns1:Resultat"},"prenom":{"_":{"type":"xsd:string"},"$":"Azou"},"token":{"_":{"type":"xsd:string"},"$":"someTokenNotReallySecured"},"reponse":{"_":{"type":"xsd:boolean"},"$":"true"}}} ;

  constructor() {
        this.postcashcaller = new PostCashServiceWeb();
   }

   ngOnInit() {
      this.postcashcaller.rechargerEspece( 1, 'assaneka', 12, 'assaneka').then( response => {} ) ; 
   }

}
