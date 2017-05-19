
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

export class PostCashResponse{
  prenom:string;
  token:string;
  reponse:boolean ;
}

@Injectable()
export class PostCashServiceWeb {

  private servicePort:string = 'http://localhost' ; 
  private servicePath:string = 'esquisseBackEnd/web/app_dev.php/invest/postcash?wsdl' ;
  private targetNamespace:string = 'urn:postcashwsdl' ;

  public responseJso : any ;
  public resp : string ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso =response ; };
        this.soapService.localNameMode = true;
  }

  public rechargerEspece(api : number, token : string, tel_destinataire : number, montant : string) : Promise<{}>  {
      var method:string = 'rechargementespece';
      var parameters:{}[] = []; 

      return new Promise( (resolve, reject) => {
        parameters['rechargementespece xmlns="urn:postcashwsdl#"'] = this.setParameters(api, token, tel_destinataire, montant) ;

        this.soapService.post(method, parameters, 'rechargementespeceResponse').then(response=>{
        //var postCashResponse:PostCashResponse = {prenom:response["rechargementespeceResponse"]["return"].prenom.$, token:response["authentificationResponse"]["return"].token.$, reponse:response["authentificationResponse"]["return"].reponse.$} ;
        console.log("Postcash a répondu : "+JSON.stringify(response) ) ;
        resolve(response) ;
        }) ;
      });
      
  }

  public setParameters( api : number, token : string, tel_destinataire : number, montant : string ):{}[] {
      var parameters:{}[] = [] ;
      var reEspParams = {api:api, token:token, tel_destinataire:tel_destinataire, montant:montant} ;
      console.log("Recharge infos "+reEspParams.tel_destinataire+" Mot de pass "+reEspParams.montant);
      parameters["params"] = reEspParams ;

      return parameters ;
  }

  private envelopeBuilder(requestBody:string):string {

      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }


}