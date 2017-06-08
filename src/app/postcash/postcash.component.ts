import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {RechargeEspeceService} from '../postcash/postservices';
import {RechargeEspece} from '../postcash/postmodels';
import {AchatCreditTelService} from '../postcash/postservices';
import {AchatCreditTel} from '../postcash/postmodels';
import {RetraitEspeceService} from '../postcash/postservices';
import {RetraitEspece} from '../postcash/postmodels';
import { PostCashServiceWeb } from '../webServiceClients/PostcashClient/Postcash.service';
import { PostCashWebService } from '../webServiceClients/Postcash/postcash.service';


@Component({
  selector: 'app-postcash',
  templateUrl: './postcash.component.html',
  styleUrls: ['./postcash.component.css']
})
export class PostcashComponent implements OnInit {
    formvisible='';
    noma:string;
    prenoma:string;
    tela:number;
    tca:string;
    nbc:number;
    mnt:number;
    teli : number;
    refi : string;
    mntf: number;
    nomp:string;
    prenomp:string;
    telephon:number;
    montan:number;
    monts:number;
    telc:number;
    prenomc:string;
    nomc:string;
    montantt:number;
    tels:number;

    telephone:number;
    montant:number;
    compteur:string;
    codevalidation:string;
    mt_carte:number;
    nb_carte:number;
    numeroarecharger:number;
    num_facture: string;
    police: string;

    
    rechargeEspece:RechargeEspece;
    achatCreditTel:AchatCreditTel;
    retraitEspece:RetraitEspece;

    loading = false ;




    constructor( 
     private retraitEspeceService:RetraitEspeceService,
     private achatCreditTelService:AchatCreditTelService,
     private rechargeEspeceService: RechargeEspeceService,
     private location: Location,
     private route:ActivatedRoute,
     private router: Router,
     private postcashcaller: PostCashServiceWeb,
     private postcashwebservice: PostCashWebService
    ) { }

  ngOnInit():void {
    this.route.params.subscribe( (params : Params) => { 
      this.rechargeEspece = this.rechargeEspeceService.getRechargeEspece(5);
    });

    this.route.params.subscribe( (params : Params) => { 
      this.achatCreditTel = this.achatCreditTelService.getAchatCreditTel(5);
    });

    this.route.params.subscribe( (params : Params) => { 
      this.retraitEspece = this.retraitEspeceService.getRetraitEspece(5);
    });

  }

    validrechargementespece(){
      console.log(this.telephone+'-'+this.montant);
      this.postcashwebservice.rechargementespece(this.telephone+'',''+this.montant).then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validateretraitespece(){
      console.log(this.codevalidation+'-'+this.telephone+'-'+this.montant);
      this.postcashwebservice.retraitespece(this.codevalidation+'',this.telephone+'',''+this.montant).then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validateachatcodewoyofal(){
      console.log(this.montant+'-'+this.compteur);
      this.postcashwebservice.achatcodewoyofal(this.montant+'',this.compteur+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validatereglementsenelec(){
      console.log(this.police+'-'+this.num_facture);
      this.postcashwebservice.reglementsenelec(this.police+'',this.num_facture).then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validateachatjula(){
      console.log(this.mt_carte+'-'+this.nb_carte);
      this.postcashwebservice.achatjula(this.mt_carte+'',this.nb_carte+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validachatcredittelephonique(){
      console.log(this.telephone+'-'+this.montant);
      this.postcashwebservice.achatcredittelephonique(this.telephone+'',this.montant+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response); 
      });
    }

}
