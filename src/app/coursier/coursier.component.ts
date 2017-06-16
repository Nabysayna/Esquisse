import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';


@Component({
  selector: 'app-coursier',
  templateUrl: './coursier.component.html',
  styleUrls: ['./coursier.component.css']
})
export class CoursierComponent implements OnInit {
  recouvrement:{}[];
  commandearecup:{}[];
  commandealivrer:{}[];


  filtre="";
  nom = "nom" ;
  asc = "asc" ;

  constructor(
         private location: Location,
         private route:ActivatedRoute,
         private router: Router) { }

 ngOnInit():void {

   this.recouvrement= [{ id: 5, nom: 'ndiaye', prenom: 'naby', tel:"771111111", adr: "parcelles u24",  montant:200000}];

   this.commandearecup= [{ id: 4, nom: 'ka', prenom: 'assane', tel:"772222222", adr: "keur mbaye fall",prod:"chaussures homme",  prix:17000}];

   this.commandealivrer= [{ id: 6, nom: 'gning', prenom: 'bamba', tel:"776666666", adr: "diamalaye",prod:"montre couple",  prix:22000}];
   
  }

}
