import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    mntrc:number;
    numc:number;

    constructor(private router: Router) { }
  
    validform(){
        this.router.navigate(['accueil/RECUS','ec']);
    }

    paiementform(){this.router.navigate(['accueil/RECUS','pc']);}

    rechargevtfform(){}

    rechargecjjform(){}

    ngOnInit() {
  }

}
