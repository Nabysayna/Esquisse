import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';

import * as sha1 from 'js-sha1';
import * as _ from "lodash";

import {DemandepretServiceWeb} from '../webServiceClients/Demandepret/demandepret.service';


export class Demandepret{
                              plafond:number;
                        } 

@Component({
  selector: 'app-demandepret',
  templateUrl: './demandepret.component.html',
  styleUrls: ['./demandepret.component.css']
})
export class DemandepretComponent implements OnInit {

	public demandepret:Demandepret[];
   token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  loading = false ;


  constructor(
  	
  	 private demandepretServiceWeb:DemandepretServiceWeb,
     private location: Location,
  	 private route:ActivatedRoute) { }

  ngOnInit() {

        this.demandepretServiceWeb.demandepret(this.token).then(demandepretserviceList => {
        this.demandepret = demandepretserviceList;
        console.log(JSON.stringify(this.demandepret));
        this.loading = false ;
      });

  	
  }

  demandeprt() {
  } 
  
}
