
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";


@Injectable()
export class EcomServiceWeb {

  private servicePort:string = 'http://localhost:8888' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/ecommerce?wsdl' ;
  private targetNamespace:string = 'urn:ecommercewsdl' ;

  public responseJso : any ;
  public resp : string ;
  public responseJsoFWS : {}[] ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso = response ; };
        this.soapService.localNameMode = true;
  }

  public listeArticles(token : string, type:string) : Promise<{}[]> {

      var method:string = 'listerarticle'; 
      var parameters:{}[] = []; 

      var reEspParams = {token:token, type:type} ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      return new Promise( (resolve, reject) => {
        parameters['listerarticle xmlns="urn:ecommercewsdl#"'] = params ;

        this.soapService.post(method, parameters, 'listerarticleResponse').then(response=>{
          this.responseJsoFWS = JSON.parse(response['listerarticleResponse'].return.$);
          console.log("reponse brute from articles Web Service "+JSON.stringify(this.responseJsoFWS[0]) ) ;
          resolve(this.responseJsoFWS) ;
        }); 
      });      
  }


  private envelopeBuilder(requestBody:string):string {
      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }

}