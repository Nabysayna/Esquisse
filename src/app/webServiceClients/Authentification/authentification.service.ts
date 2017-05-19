
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

export class AuthResponse{
  prenom:string;
  token:string;
  reponse:boolean ;
}

@Injectable()
export class AuthentificationServiceWeb {

  private servicePort:string = 'http://localhost' ;  
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/logging?wsdl' ;
  private targetNamespace:string = 'urn:authwsdl' ;

  public responseJso : any ;
  public resp : string ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso =response ; };
        this.soapService.localNameMode = true;
  }

  public authentifier(login : string, password: string) : Promise<AuthResponse>  {
      var method:string = 'authentification';
      var parameters:{}[] = [];

      let tryLogin = login ;
      let tryPwd = password ;
      return new Promise( (resolve, reject) => {
        parameters['authentification xmlns="urn:authwsdl#"'] = this.setParameters(tryLogin, tryPwd) ;
        this.soapService.post(method, parameters, 'authentificationResponse').then(response=>{
        var authResponse:AuthResponse = {prenom:response["authentificationResponse"]["return"].prenom.$, token:response["authentificationResponse"]["return"].token.$, reponse:response["authentificationResponse"]["return"].reponse.$} ;
        resolve(authResponse)
        }) ;
      });
      
  }

  public setParameters( tryLogin: string, tryPwd: string):{}[] {
      var parameters:{}[] = [] ;
      var user = {login:tryLogin, pwd:tryPwd} ;
      console.log("Utilisateur "+user.login+" Mot de pass "+user.pwd);
      parameters["user"] = user ;

      return parameters ;
  }

  private envelopeBuilder(requestBody:string):string {

      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }


}