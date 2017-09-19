import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";


@Injectable()
export class PostCashWebService {


  private servicePort:string = 'http://51.254.200.129' ; 
  private servicePath:string = '/backendprod/EsquisseBackEnd/web/app.php/invest/postcash?wsdl' ;

/*
  private servicePort:string = 'http://localhost' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/postcash?wsdl' ;
*/

  private targetNamespace:string = 'urn:postcashwsdl' ;

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

  public rechargementespece(tel_destinataire : string, montant : string): Promise<any>  {
    var method:string = 'rechargementespece';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, tel_destinataire: tel_destinataire, montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['rechargementespece xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'rechargementespeceResponse').then(response=>{
        var reponse:any = JSON.parse(response['rechargementespeceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public retraitespece(code_validation: string, tel_destinataire: string, montant : string): Promise<any>  {
    var method:string = 'retraitespece';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, code_validation: code_validation, tel_destinataire: tel_destinataire, montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['retraitespece xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'retraitespeceResponse').then(response=>{
        var reponse:any = JSON.parse(response['retraitespeceResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public achatcodewoyofal(montant : string, compteur : string): Promise<any>  {
    var method:string = 'achatcodewoyofal';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, montant: montant, compteur: compteur} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['achatcodewoyofal xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'achatcodewoyofalResponse').then(response=>{
        var reponse:any = JSON.parse(response['achatcodewoyofalResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public reglementsenelec(police : string, num_facture : string): Promise<any>  {
    var method:string = 'reglementsenelec';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, police: police, num_facture: num_facture} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['reglementsenelec xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'reglementsenelecResponse').then(response=>{
        var reponse:any = JSON.parse(response['reglementsenelecResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public detailfacturesenelec(police : string, num_facture : string): Promise<any>  {
    var method:string = 'detailfacturesenelec';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, police: police, num_facture: num_facture} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['detailfacturesenelec xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'detailfacturesenelecResponse').then(response=>{
        var reponse:any = JSON.parse(response['detailfacturesenelecResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public achatneo(produit : string, montant : string, type : string): Promise<any>  {
    var method:string = 'achatneo';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, produit: produit, montant: montant, type: type} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['achatneo xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'achatneoResponse').then(response=>{
        var reponse:any = JSON.parse(response['achatneoResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public achatjula(mt_carte : string, nb_carte : string): Promise<any>  {
    var method:string = 'achatjula';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, mt_carte: mt_carte, nb_carte: nb_carte} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['achatjula xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'achatjulaResponse').then(response=>{
        var reponse:any = JSON.parse(response['achatjulaResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public achatcredittelephonique(numero_a_recharger : string, montant : string): Promise<any>  {
    var method:string = 'achatcredittelephonique';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, numero_a_recharger: numero_a_recharger, montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['achatcredittelephonique xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'achatcredittelephoniqueResponse').then(response=>{
        var reponse:any = JSON.parse(response['achatcredittelephoniqueResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public cashtocashsend(tel_exp: string, nom_exp : string, prenom_exp : string, 
    cni_exp : string, type_piece_exp : string, pays_exp : string, tel_rec : string, 
    prenom_rec : string, nom_rec : string, montant : string): Promise<any>  {
    var method:string = 'cashtocashsend';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, tel_exp: tel_exp, nom_exp: nom_exp, 
      prenom_exp: prenom_exp, cni_exp: cni_exp, type_piece_exp: type_piece_exp, 
      pays_exp: pays_exp, tel_rec: tel_rec, prenom_rec: prenom_rec, nom_rec: nom_rec, 
      montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['cashtocashsend xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'cashtocashsendResponse').then(response=>{
        var reponse:any = JSON.parse(response['cashtocashsendResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public cashtocashreceive(tel_rec: string, cni_rec : string, type_piece_rec : string, 
    pays_rec : string, code : string, montant : string): Promise<any>  {
    var method:string = 'cashtocashreceive';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, tel_rec: tel_rec, cni_rec: cni_rec, 
      type_piece_rec: type_piece_rec, pays_rec: pays_rec, code: code, 
      montant: montant} ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['cashtocashreceive xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'cashtocashreceiveResponse').then(response=>{
        var reponse:any = JSON.parse(response['cashtocashreceiveResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public transfertverstamtam(tel: string, montant : string, frais : string, 
    nom : string, prenom : string, telephone_benef : string, code : string, 
    pays : string, rcv_address : string, transaction_reason : string, incoming_source : string): Promise<any>  {
    var method:string = 'transfertverstamtam';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, tel: tel, montant: montant, 
      frais: frais, nom: nom, prenom: prenom, telephone_benef: telephone_benef,
      code: code, pays: pays, rcv_address: rcv_address, transaction_reason: transaction_reason,
      incoming_source: incoming_source } ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['transfertverstamtam xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'transfertverstamtamResponse').then(response=>{
        var reponse:any = JSON.parse(response['transfertverstamtamResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public transfertverstamtamviaapay(prenom_exp: string, nom_exp : string, typecni_exp : string, 
    cni_exp : string, tel_exp : string, montant : string, frais : string, nom_dest : string, 
    prenom_dest : string, tel_dest : string, pays_dest : string, adresse_dest : string): Promise<any>  {
    var method:string = 'transfertverstamtamviaapay';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, prenom_exp: prenom_exp, nom_exp: nom_exp, 
      typecni_exp: typecni_exp, cni_exp: cni_exp, tel_exp: tel_exp, montant: montant,
      frais: frais, nom_dest: nom_dest, prenom_dest: prenom_dest, tel_dest: tel_dest,
      pays_dest: pays_dest, adresse_dest: adresse_dest } ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['transfertverstamtamviaapay xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'transfertverstamtamviaapayResponse').then(response=>{
        var reponse:any = JSON.parse(response['transfertverstamtamviaapayResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public fraistamtamviaapay(montant: string, pays: string): Promise<any>  {
    var method:string = 'fraistamtamviaapay';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, montant: montant, pays: pays } ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['fraistamtamviaapay xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'fraistamtamviaapayResponse').then(response=>{
        var reponse:any = JSON.parse(response['fraistamtamviaapayResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  public histotransactmarchand(date_debut: string, date_fin: string): Promise<any>  {
    var method:string = 'histotransactmarchand';
    var parameters:{}[] = [];
    var reEspParams = {token:this.token, date_debut: date_debut, date_fin: date_fin } ;
    var params:{}[] = [] ; 
    params["params"] = reEspParams ;

    parameters['histotransactmarchand xmlns="urn:postcashwsdl#"'] = params;
    
    return new Promise( (resolve, reject) => {
      this.soapService.post(method, parameters, 'histotransactmarchandResponse').then(response=>{
        var reponse:any = JSON.parse(response['histotransactmarchandResponse'].return.$);
        resolve(reponse) ;
      }); 
    });     
  }

  private envelopeBuilder(requestBody:string):string {
    return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }


}