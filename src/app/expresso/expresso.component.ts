import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {CashInService} from '../expresso/expressoservices';
import {CashIn} from '../expresso/expressomodels';
import {CashOutService} from '../expresso/expressoservices';
import {CashOut} from '../expresso/expressomodels';
import {AgentTopUpService} from '../expresso/expressoservices';
import {AgentTopUp} from '../expresso/expressomodels';
import {MyAccountService} from '../expresso/expressoservices';
import {MyAccount} from '../expresso/expressomodels';


@Component({
  selector: 'app-expresso',
  templateUrl: './expresso.component.html',
  styleUrls: ['./expresso.component.css']
})
export class ExpressoComponent implements OnInit {
	 formvisible='';
    idclient:string;
    telephone:number;
    montant:number;
    passwordc:string;
    telephonec:number;
    montantd:number;
    idclientc:string;
    passwordco:string;
    tel:number;
    mnt:number;
    idc:string;
    mdp:string;
    idcl:string;
    pwd:string;

    cashIn:CashIn;
    cashOut:CashOut;
    agentTopUp:AgentTopUp;
    myAccount:MyAccount;


  constructor( 
   		 private myAccountService:MyAccountService,
         private agentTopUpService:AgentTopUpService,
  		 private cashOutService: CashOutService,
  		 private cashInService: CashInService,
         private location: Location,
         private route:ActivatedRoute,
  	     private router: Router
  	) { }

  ngOnInit():void {
    this.route.params.subscribe( (params : Params) => { 
      this.cashIn = this.cashInService.getCashIn(5);
    });


    this.route.params.subscribe( (params : Params) => { 
      this.cashOut = this.cashOutService.getCashOut(5);
    });

     this.route.params.subscribe( (params : Params) => { 
      this.agentTopUp = this.agentTopUpService.getAgentTopUp(5);
    });

       this.route.params.subscribe( (params : Params) => { 
      this.myAccount = this.myAccountService.getMyAccount(5);
    });
}

  validcashin(){}

  validcashout(){}

  validagenttopup(){}

  validmyaccount(){}

}
