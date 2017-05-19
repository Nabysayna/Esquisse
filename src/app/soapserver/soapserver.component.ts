import { Component, OnInit } from '@angular/core';
import { AuthentificationServiceWeb, AuthResponse } from '../webServiceClients/Authentification/authentification.service';


@Component({
  selector: 'app-soapserver',
  templateUrl: './soapserver.component.html',
  styleUrls: ['./soapserver.component.css']
})

export class SoapserverComponent implements OnInit {

  public resp : string  ;
  public authentiService: AuthentificationServiceWeb;
  public retourAuthentif:{} = {"return":{"_":{"type":"ns1:Resultat"},"prenom":{"_":{"type":"xsd:string"},"$":"Azou"},"token":{"_":{"type":"xsd:string"},"$":"someTokenNotReallySecured"},"reponse":{"_":{"type":"xsd:boolean"},"$":"true"}}} ;

  constructor() {
        this.authentiService = new AuthentificationServiceWeb();
   }

   ngOnInit() {
      this.authentiService.authentifier("assane.ka@bbstvnet.com", "assane").then( response => { var resp:AuthResponse=response ;
      	if(resp.reponse)
      			console.log("Resp valait "+resp.reponse) ;  
      } ) ; 
   }

}
