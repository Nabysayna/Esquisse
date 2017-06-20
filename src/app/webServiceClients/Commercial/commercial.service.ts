
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

class Fichier {
  public id:number;
  public nom:string;
  public prenom:string;
  public tel:string;
  public adr:string;
  public qualification:string;
  public choix:boolean;
  
  }


@Injectable()
export class CommercialServiceWeb {

  private servicePort:string = 'http://localhost:8888' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/ecommerce?wsdl' ;
  private targetNamespace:string = 'urn:commercialwsdl' ;

  public responseJso : any ;
  public resp : string ;
  public filtre : string ;
  public responseJsoFWS : Fichier[] ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso = response ; };
        this.soapService.localNameMode = true;
  }


  public listcoursier(token:string, type:string) : Promise<string> {

     var method:string = 'listcoursier';
    var parameters:{}[] = [];
    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listcoursier xmlns="urn:commercialwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listcoursierResponse').then(response=>{
        var reponse:any = JSON.parse(response['listcoursierResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }



  private envelopeBuilder(requestBody:string):string {
      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }

}