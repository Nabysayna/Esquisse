import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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



    constructor(private router: Router) { }

  ngOnInit() {}

    validrechargementespece(){}

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
