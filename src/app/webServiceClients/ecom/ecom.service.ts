
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

class Article {
  public id:number;
  public nomImg:string;
  public designation:string;
  public description:string;
  public prix:number;
  public stock:number;
}


export class Commande {
  public id:number;
  public quantite:number;
  public designation:string;
  public prixUnitaire:number ;
  public tel:number;
  public fullName:string;
  public dateCommande:string;
}


@Injectable()
export class EcomServiceWeb {

  private servicePort:string = 'http://localhost' ; 
  private servicePath:string = '/dev-bbsinvest-plateform/EsquisseBackEnd/web/app_dev.php/invest/ecommerce?wsdl' ;
  private targetNamespace:string = 'urn:ecommercewsdl' ;

  public responseJso : any ;
  public resp : string ;
  public filtre : string ;
  public responseJsoFWS : Article[] ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso = response ; };
        this.soapService.localNameMode = true;
  }


  public ajouterArticle(requestedValue:{}) : Promise<string> {

      var method:string = 'ajoutarticle'; 
      var parameters:{}[] = []; 

      var reEspParams = requestedValue ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      return new Promise( (resolve, reject) => {
        parameters['ajoutarticle xmlns="urn:ecommercewsdl#"'] = params ;

        this.soapService.post(method, parameters, 'ajoutarticleResponse').then(response=>{
          let wSresponse = response['ajoutarticleResponse'].return.$ ;
          console.log("reponse brute from articles Web Service "+wSresponse ) ;
          resolve(wSresponse) ;
        }); 
      });      
  }

  public commander(requestedValue:{}) : Promise<string> {
    var method:string = 'ajoutcommande'; 
    var parameters:{}[] = []; 
    var reEspParams = requestedValue ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    return new Promise( (resolve, reject) => {
      parameters['ajoutcommande xmlns="urn:ecommercewsdl#"'] = params ;

      this.soapService.post(method, parameters, 'ajoutcommandeResponse').then(response=>{
        let wSresponse = response['ajoutcommandeResponse'].return.$ ;
        console.log("reponse brute from articles Web Service "+wSresponse ) ;
        resolve(wSresponse) ;
      }); 
    });      
  }

  public listeArticles(token : string, type:string) : Promise<Article[]> {

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

  public listerCommandes(token : string) : Promise<Commande[]> {

      var method:string = 'listercommande'; 
      var parameters:{}[] = []; 
      var reEspParams = {token:token} ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      return new Promise( (resolve, reject) => {
        parameters['listercommande xmlns="urn:ecommercewsdl#"'] = params ;
        this.soapService.post(method, parameters, 'listercommandeResponse').then(response=>{
          let responseJsoFWS : Commande[] = JSON.parse(response['listercommandeResponse'].return.$);
          console.log("reponse brute from articles Web Service "+JSON.stringify(responseJsoFWS[0]) ) ;
          resolve(responseJsoFWS) ;
        }); 
      });      
  }



  private envelopeBuilder(requestBody:string):string {
      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }

}