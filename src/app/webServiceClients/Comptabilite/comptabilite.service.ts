import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";
 

@Injectable()
export class ComptabiliteServiceWeb {

  private servicePort:string = 'http://localhost:8888' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/comptapdv?wsdl' ;
  private targetNamespace:string = 'urn:comptapdvwsdl' ;

  public responseJso : any;
  public resp : string  ;  
  private soapService:SoapService;

  private token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;

  
  constructor() {
    this.soapService = new SoapService();
    
    this.soapService.setServicePort(this.servicePort) ;
    this.soapService.setServicePath(this.servicePath);
    this.soapService.setServiceUrl(this.servicePort+this.servicePath);
    this.soapService.setTargetNamespace(this.targetNamespace);  

    this.soapService.envelopeBuilder = this.envelopeBuilder;
    this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso = response ; };
    this.soapService.localNameMode = true;
  }

  public listevente(type : string): Promise<any>  {
    var method:string = 'listevente';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams;

    parameters['listevente xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listeventeResponse').then(response=>{
        var reponse  = JSON.parse(response['listeventeResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public listecharge(type : string): Promise<any>  {
    var method:string = 'listecharge';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listecharge xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listechargeResponse').then(response=>{
        var reponse  = JSON.parse(response['listechargeResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public ajoutcharge(type: string, libelle: string, idpdv: number, service: string, montant: number): Promise<any>  {
    var method:string = 'ajoutcharge';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, libelle: libelle, idpdv: idpdv, service: service, montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['ajoutcharge xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'ajoutchargeResponse').then(response=>{
        var reponse  = JSON.parse(response['ajoutchargeResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public supprimerservice(type : string, idsupprimer: number): Promise<any>  {
    var method:string = 'supprimerservice';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, idsupprimer: idsupprimer} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['supprimerservice xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'supprimerserviceResponse').then(response=>{
        var reponse  = JSON.parse(response['supprimerserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public modifierservice(type : string, service : string, designations : string, idservice : number): Promise<any>  {
    var method:string = 'modifierservice';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, service: service, designations: designations, idservice: idservice} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['modifierservice xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'modifierserviceResponse').then(response=>{
        var reponse  = JSON.parse(response['modifierserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public ajoutservice(type : string, nom: string, idpdv: number, designations: string): Promise<any>  {
    var method:string = 'ajoutservice';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, nom: nom, idpdv: idpdv, designations: designations} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['ajoutservice xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'ajoutserviceResponse').then(response=>{
        var reponse  = JSON.parse(response['ajoutserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public approvisionner(type : string, idpdv: number, montant: number): Promise<any>  {
    var method:string = 'approvisionner';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, idpdv: idpdv, montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['approvisionner xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'approvisionnerResponse').then(response=>{
        var reponse  = JSON.parse(response['approvisionnerResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
  }

  public listecaisse(type : string): Promise<any>  {
    var method:string = 'listecaisse';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listecaisse xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listecaisseResponse').then(response=>{
        var reponse  = JSON.parse(response['listecaisseResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public listeservice(type : string, idpdv: number): Promise<any>  {
    var method:string = 'listeservice';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, idpdv: idpdv} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listeservice xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listeserviceResponse').then(response=>{
        var reponse  = JSON.parse(response['listeserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public listerevenu(type : string): Promise<any>  {
    var method:string = 'listerevenu';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listerevenu xmlns="urn:comptapdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listerevenuResponse').then(response=>{
        var reponse  = JSON.parse(response['listerevenuResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  private envelopeBuilder(requestBody:string):string {
    return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }


}