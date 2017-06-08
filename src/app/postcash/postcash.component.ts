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
    telephone:number;
    montant:number;
    telephon:number;
    montan:number;
    monts:number;
    telc:number;
    prenomc:string;
    nomc:string;
    compteur:string;
    montantt:number;
    tels:number;

    
    rechargeEspece:RechargeEspece;
    achatCreditTel:AchatCreditTel;
    retraitEspece:RetraitEspece;


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

    this.postcashwebservice.rechargementespece('assaneka','12','100000').then(postcashwebserviceList => 
      console.log(postcashwebserviceList) 
    );

    this.postcashwebservice.achatcredittelephonique('assaneka','12','100000').then(postcashwebserviceList => 
      console.log(postcashwebserviceList) 
    );

  }

    validrechargementespece(){

    }

    validateRetraitEspece(){}

    validAchatJula(){
        this.router.navigate(['accueil/RECUS','aj']);
    }

    validateReglementSenelec(){
        this.router.navigate(['accueil/RECUS','rgs']);
    }

    validachatcodewoyofal(){this.router.navigate(['accueil/RECUS','acw']);}

    validachatcredittelephonique(){}

}
