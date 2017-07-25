import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";
import { AdminmultipdvNombredeReclamationAgentPdvVente }    from '../../models/adminmultipdv-dashboard-nrpv';
import { AdminmultipdvPerformanceagent }    from '../../models/adminmultipdv-dashboard-pa';
import { AdminmultipdvActiviteservices }    from '../../models/adminmultipdv-dashboard-as';
import { AdminmultipdvReclamation }    from '../../models/adminmultipdv-reclamation';
import { AdminmultipdvRecouvrement }    from '../../models/adminmultipdv-recouvrement';
import { AdminmultipdvDeposit }    from '../../models/adminmultipdv-monitoring';
import { AdminmultipdvDemanderetrait }    from '../../models/adminmultipdv-demanderetrait';
import { AdminmultipdvMajcaution }    from '../../models/adminmultipdv-majcaution';
import { AdminmultipdvDepositInitialConsommeParService }    from '../../models/adminmultipdv-monitoring-dicps';
 

@Injectable()
export class AdminmultipdvServiceWeb {

  private servicePort:string = 'http://localhost:8888' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/adminmultipdv?wsdl' ;
  
  private targetNamespace:string = 'urn:adminmultipdvwsdl' ;

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

  public nombredereclamationagentpdvvente(type : string): Promise<any>  {
    var method:string = 'nombredereclamationagentpdvvente';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['nombredereclamationagentpdvvente xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'nombredereclamationagentpdvventeResponse').then(response=>{
        var reponse  = JSON.parse(response['nombredereclamationagentpdvventeResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public bilandeposit(type : string): Promise<any>  {
    var method:string = 'bilandeposit';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['bilandeposit xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'bilandepositResponse').then(response=>{
        var reponse = JSON.parse(response['bilandepositResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public depositinitialconsommeparservice(type : string): Promise<any>  {
    var method:string = 'depositinitialconsommeparservice';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['depositinitialconsommeparservice xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'depositinitialconsommeparserviceResponse').then(response=>{
        var reponse = JSON.parse(response['depositinitialconsommeparserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public performanceagent(type : string): Promise<AdminmultipdvPerformanceagent[]>  {
    var method:string = 'performanceagent';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['performanceagent xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'performanceagentResponse').then(response=>{
        var reponse = JSON.parse(response['performanceagentResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public historiquerecouvrement(type : string): Promise<AdminmultipdvRecouvrement[]>  {
    var method:string = 'historiquerecouvrement';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['historiquerecouvrement xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'historiquerecouvrementResponse').then(response=>{
        var reponse = JSON.parse(response['historiquerecouvrementResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public historiquereclamation(type : string): Promise<any>  {
    var method:string = 'historiquereclamation';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['historiquereclamation xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'historiquereclamationResponse').then(response=>{
        var reponse = JSON.parse(response['historiquereclamationResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public listmap(type : string): Promise<any>  {
    var method:string = 'listmap';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listmap xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listmapResponse').then(response=>{
        var reponse = JSON.parse(response['listmapResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public activiteservices(type : string): Promise<AdminmultipdvActiviteservices>  {
    var method:string = 'activiteservices';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['activiteservices xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'activiteservicesResponse').then(response=>{
        var reponse = JSON.parse(response['activiteservicesResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public demanderetraitfond(type : string): Promise<AdminmultipdvDemanderetrait[]>  {
    var method:string = 'demanderetraitfond';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['demanderetraitfond xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'demanderetraitfondResponse').then(response=>{
        var reponse = JSON.parse(response['demanderetraitfondResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public validerretrait(type : string, idretrait : number): Promise<any>  {
    var method:string = 'validerretrait';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, idretrait: idretrait} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['validerretrait xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'validerretraitResponse').then(response=>{
        var reponse = JSON.parse(response['validerretraitResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public listmajcautions(type : string): Promise<any>  {
    var method:string = 'listmajcautions';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listmajcautions xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listmajcautionsResponse').then(response=>{
        var reponse = JSON.parse(response['listmajcautionsResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public modifymajcaution(type : string, idadminpdv : number, modifycaution : number): Promise<any>  {
    var method:string = 'modifymajcaution';
    var parameters:{}[] = [];

    var reEspParams = {token: this.token, type: type, idadminpdv: idadminpdv, modifycaution: modifycaution} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['modifymajcaution xmlns="urn:adminmultipdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'modifymajcautionResponse').then(response=>{
        var reponse = JSON.parse(response['modifymajcautionResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public performancesadminpdv(type : string): Promise<any>  {
    var method:string = 'performancesadminpdv';
    var parameters:{}[] = [];
    var reEspParams = {token: this.token, type: type} ;
    var params:{}[] = [] ; 

    params["params"] = reEspParams ;
    parameters['performancesadminpdv xmlns="urn:adminmultipdvwsdl#"'] = params;
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'performancesadminpdvResponse').then(response=>{
        var reponse = JSON.parse(response['performancesadminpdvResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
  }

  private envelopeBuilder(requestBody:string):string {
    return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }


}