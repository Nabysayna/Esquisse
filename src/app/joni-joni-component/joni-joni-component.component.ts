import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {RechargeVitfeService} from '../joni-joni-component/joniservices';
import {RechargeVitfe} from '../joni-joni-component/jonimodels';
import {RechargeCarteService} from '../joni-joni-component/joniservices';
import {RechargeCarte} from '../joni-joni-component/jonimodels';

@Component({
  selector: 'app-joni-joni-component',
  templateUrl: './joni-joni-component.component.html',
  styleUrls: ['./joni-joni-component.component.css']
})
export class JoniJoniComponentComponent implements OnInit {

    formvisible = '' ;
    nome : string ;
    prenome : string ;
    tele : number ;
    nomd : string ;
    prenomd : string ;
    teld : number ;
    mnt : number ;
    nomp : string ;
    teli : number;
    refi : string;
    mntf: number;
    mntr: number;
    telr : number;
    numc:number;
    tels:number;


    
    rechargeCarte :RechargeCarte;
    rechargeVitfe :RechargeVitfe;


    constructor(
         private rechargeCarteService: RechargeCarteService,
         private rechargeVitfeService: RechargeVitfeService,
         private location: Location,
         private route:ActivatedRoute,
         private router: Router) { }
  
    validform(){
        this.router.navigate(['accueil/RECUS','ec']);
    }

    paiementform(){this.router.navigate(['accueil/RECUS','pc']);}

    rechargevtfform(){}

    rechargecjjform(){}

    ngOnInit():void {
    this.route.params.subscribe( (params : Params) => { 
      this.rechargeVitfe = this.rechargeVitfeService.getRechargeVitfe(5);
    });


     this.route.params.subscribe( (params : Params) => { 
      this.rechargeCarte = this.rechargeCarteService.getRechargeCarte(5);
    });}


}
