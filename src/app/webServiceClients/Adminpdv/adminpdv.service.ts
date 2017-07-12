
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";
import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';
import { AdminpdvPerformancepdv }    from '../../models/adminpdv-performancepdv';
import { AdminpdvNotifications }    from '../../models/adminpdv-notifications';
import { AdminpdvDeposit }    from '../../models/adminpdv-deposit';
import { AdminpdvConsommationDepositService }    from '../../models/adminpdv-cds';
import { AdminpdvConsommationDepositPdv }    from '../../models/adminpdv-cdpdv';
import { AdminpdvRecouvrement }    from '../../models/adminpdv-recouvrement';
import { AdminpdvReclamation }    from '../../models/adminpdv-reclamation';
import { AdminpdvUserpdv }    from '../../models/adminpdv-userpdv';
 

@Injectable()
export class AdminpdvServiceWeb {


  // private servicePort:string = 'http://51.254.200.129' ; 

  private servicePort:string = 'http://localhost' ; 

  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/adminpdv?wsdl' ;
  private targetNamespace:string = 'urn:adminpdvwsdl' ;

  public responseJso : any;
  public resp : string  ;  

  private soapService:SoapService;
  
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

  public montanttransfertservice(token : string,type : string): Promise<AdminpdvMontantTransferParService>  {
    var method:string = 'montanttransfertservice';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['montanttransfertservice xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'montanttransfertserviceResponse').then(response=>{
        var reponse : AdminpdvMontantTransferParService = JSON.parse(response['montanttransfertserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public performancepdv(token : string,type : string): Promise<AdminpdvPerformancepdv[]>  {
    var method:string = 'performancepdv';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['performancepdv xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'performancepdvResponse').then(response=>{
        var reponse = JSON.parse(response['performancepdvResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public notifications(token : string,type : string): Promise<AdminpdvNotifications[]>  {
    var method:string = 'notifications';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['notifications xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'notificationsResponse').then(response=>{
        var reponse = JSON.parse(response['notificationsResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public bilandeposit(token : string,type : string): Promise<AdminpdvDeposit>  {
    var method:string = 'bilandeposit';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['bilandeposit xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'bilandepositResponse').then(response=>{
        var reponse = JSON.parse(response['bilandepositResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public consommationdepositservice(token : string,type : string): Promise<AdminpdvConsommationDepositService[]>  {
    var method:string = 'consommationdepositservice';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['consommationdepositservice xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'consommationdepositserviceResponse').then(response=>{
        var reponse = JSON.parse(response['consommationdepositserviceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public consommationdepositpdv(token : string,type : string): Promise<AdminpdvConsommationDepositPdv[]>  {
    var method:string = 'consommationdepositpdv';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['consommationdepositpdv xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'consommationdepositpdvResponse').then(response=>{
        var reponse = JSON.parse(response['consommationdepositpdvResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public historiquerecouvrement(token : string,type : string): Promise<AdminpdvRecouvrement[]>  {
    var method:string = 'historiquerecouvrement';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['historiquerecouvrement xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'historiquerecouvrementResponse').then(response=>{
        var reponse = JSON.parse(response['historiquerecouvrementResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public historiquereclamation(token : string,type : string): Promise<AdminpdvReclamation[]>  {
    var method:string = 'historiquereclamation';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['historiquereclamation xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'historiquereclamationResponse').then(response=>{
        var reponse = JSON.parse(response['historiquereclamationResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  public listuserpdv(token : string,type : string): Promise<AdminpdvUserpdv[]>  {
    var method:string = 'listuserpdv';
    var parameters:{}[] = [];

    var reEspParams = {token:token, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['listuserpdv xmlns="urn:adminpdvwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'listuserpdvResponse').then(response=>{
        var reponse = JSON.parse(response['listuserpdvResponse'].return.$);
        resolve(reponse) ;
      }); 
    });   
      
  }

  private envelopeBuilder(requestBody:string):string {

      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }


}