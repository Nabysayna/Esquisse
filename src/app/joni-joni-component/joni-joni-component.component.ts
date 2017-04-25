import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joni-joni-component',
  templateUrl: './joni-joni-component.component.html',
  styleUrls: ['./joni-joni-component.component.css']
})
export class JoniJoniComponentComponent implements OnInit {

 formvisible = '' ;
    nome : string ;
    prenome : string ;
    tele : string ;
    nomd : string ;
    prenomd : string ;
    teld : string ;
    mnt : number ;
    nomp : string ;
    tel : string;
    ref : string;
    mntf: string;
    mntr: string;
    telr : string;
    mntrc:string;
    numc:string;

    constructor() { }
  
    validform(){}

    paiementform(){}

    rechargevtfform(){}

    rechargecjjform(){}

    ngOnInit() {
  }

}
