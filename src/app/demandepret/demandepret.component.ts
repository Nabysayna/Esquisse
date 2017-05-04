import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {DemandePret} from '../demandepret/demandemodels';
import {DemandePretService} from '../demandepret/demandeservice';

@Component({
  selector: 'app-demandepret',
  templateUrl: './demandepret.component.html',
  styleUrls: ['./demandepret.component.css']
})
export class DemandepretComponent implements OnInit {

	demandePret:DemandePret;
    mntp : number ;


  constructor(
  	
  	 private demandePretService:DemandePretService,
     private location: Location,
  	 private route:ActivatedRoute) { }

  ngOnInit() {

  	 this.route.params.subscribe( (params : Params) => { 
      this.demandePret = this.demandePretService.getDemandePret(5);
    });
  }

  demandeprt() {
  } 
  
}
