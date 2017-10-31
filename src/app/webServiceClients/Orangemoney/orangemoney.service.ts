
import { Injectable }    from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class OrangeMoneyService {

    private link:string = "http://51.254.200.129/backendprod/horsSentiersBattus/scripts/om.php";
    private headers:Headers;

    constructor(private _http: Http){
        this.headers = new Headers();
    }

   requerirControllerOM(requete:any): Promise<any>{
        let url = this.link;
        let headers = new Headers({ 'Content-Type': 'application/json', requestParameters: requete});
        let options = new RequestOptions({ headers: headers });
        return this._http.post( url, JSON.stringify({requestParameters: requete}), options).toPromise().then( res => {return res} ).catch(error => {return 'bad' });
    }

}
