
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

export class TntResponse{
  id_abonnement: number ;
  prenom: string ;
  nom: number ;
  tel: number ;
  adresse: number ;
  region: string ;
  city: string ;
  ncni: string ;
  n_chip : string ;
  n_carte : string ;
  date_abonnement: string ;
  duree : string ;
  id_typeabonnement : string ;
  montant : number ;
  id_operateur : number;
  etat : number ;
  id_activateur: number ;
  date_activation: string;
  etat_reclamation : string;
  datefinactivation : string ;
}


@Injectable()
export class TntServiceWeb {

  private servicePort:string = 'http://abonnement.bbstvnet.com' ; 
  private servicePath:string = '/integration-server-ws-tnt/index.php?wsdl' ;
  private targetNamespace:string = 'urn:tntwsdl' ;

  public responseJso : any ;
  public resp : string ;
  public responseJsoFWS : TntResponse[] ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso =response ; };
        this.soapService.localNameMode = true;
  }


  public listAbonnement(id : number, token : string) : Promise<TntResponse[]> {

      var method:string = 'listabonnement'; 
      var parameters:{}[] = []; 

      var reEspParams = {id:id, token:token} ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      return new Promise( (resolve, reject) => {
        parameters['listabonnement xmlns="urn:tntwsdl#"'] = params ;

        this.soapService.post(method, parameters, 'listabonnementResponse').then(response=>{
          this.responseJsoFWS = JSON.parse(response['listabonnementResponse'].return.$);
          console.log("reponse brute from class attribute "+JSON.stringify(this.responseJsoFWS[0]) ) ;
          resolve(this.responseJsoFWS) ;
        }); 
      });      
  }


  private envelopeBuilder(requestBody:string):string {
      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }

}