
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

export class Gestionreporting{
                          date:string;
                          operateur:string;
                          traitement:string;
                          montant:number;
                        } 



@Injectable()
export class GestionreportingServiceWeb {



  private servicePort:string = 'http://localhost' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/gestionreporting?wsdl' ;

  private targetNamespace:string = 'urn:gestionreportingwsdl' ;

  public responseJso : any ;
  public resp : string ;
  public filtre : string ;
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


   public gestionreporting(token:string) : Promise<Gestionreporting[]> {

             var method:string = 'gestionreporting';
            var parameters:{}[] = [];
            var reEspParams = {token:token} ;

            parameters['gestionreporting xmlns="urn:gestionreportingwsdl#"'] = reEspParams;
                

            
            return new Promise( (resolve, reject) => {
              this.soapService.post(method, parameters, 'gestionreportingResponse').then(response=>{
                var reponse:Gestionreporting[] = JSON.parse(response['gestionreportingResponse'].return.$);
                resolve(reponse) ;
              }); 
            });     
  }

  private envelopeBuilder(requestBody:string):string {
      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }

}