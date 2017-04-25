import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-cash-component',
  templateUrl: './post-cash-component.component.html',
  styleUrls: ['./post-cash-component.component.css']
})
export class PostCashComponentComponent implements OnInit {

	telephone = '';
  	montant = '';
  	codeValidation = '';
  	typeCarte = '';
  	nombreCarte = '';
  	police = '';
  	numeroDeFacture = '';
  	compteur = '';

  	errorvalue : boolean ;
  	validervalue : boolean ;
  	
  	constructor() { 
  		this.errorvalue = true;
  		this.validervalue = true;

  	}

  	ngOnInit() { }

  	validateRechargementEspece(){
  		if (this.telephone != '1234'){
  			this.errorvalue = false;
  			this.validervalue = true;
  		}
  		else{
  			this.errorvalue = true;
  			this.validervalue = false;
  		}
  	}

  	validateRetraitEspece(){
  		if (this.codeValidation != '1234'){
  			this.errorvalue = false;
  			this.validervalue = true;
  		}
  		else{
  			this.errorvalue = true;
  			this.validervalue = false;
  		}
  	}

  	validateAchatJula(){
  		if (this.typeCarte != '1234'){
  			this.errorvalue = false;
  			this.validervalue = true;
  		}
  		else{
  			this.errorvalue = true;
  			this.validervalue = false;
  		}
  	}

  	validateReglementSenelec(){
  		if (this.police != '1234'){
  			this.errorvalue = false;
  			this.validervalue = true;
  		}
  		else{
  			this.errorvalue = true;
  			this.validervalue = false;
  		}
  	}

  	validateAchatCodeWoyofal(){
  		if (this.montant != '1234'){
  			this.errorvalue = false;
  			this.validervalue = true;
  		}
  		else{
  			this.errorvalue = true;
  			this.validervalue = false;
  		}
  	}

  	validateAchatCreditTelephone(){
  		if (this.telephone != '1234'){
  			this.errorvalue = false;
  			this.validervalue = true;
  		}
  		else{
  			this.errorvalue = true;
  			this.validervalue = false;
  		}
  	}

}
