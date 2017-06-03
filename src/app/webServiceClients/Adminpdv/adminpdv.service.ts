
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";
import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';


@Injectable()
export class AdminpdvServiceWeb {

  private servicePort:string = 'http://localhost' ; 
  private servicePath:string = '/dev-bbsinvest-plateform/EsquisseBackEnd/web/invest/adminpdv?wsdl' ;
  private targetNamespace:string = 'urn:adminpdvwsdl' ;

  public responseJso : any;
  public resp : string  ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
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

    private envelopeBuilder(requestBody:string):string {

        return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
    }


}