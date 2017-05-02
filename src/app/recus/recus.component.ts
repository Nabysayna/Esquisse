import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }               from '@angular/common';
import {EnvoiCash} from '../joni-joni-component/jonimodels';
import {EnvoicashService} from '../joni-joni-component/joniservices';


@Component({
  selector: 'app-recus',
  templateUrl: './recus.component.html',
  styleUrls: ['./recus.component.css']
})
export class RecusComponent implements OnInit {

    formvisible = '' ;
    envoiCash:EnvoiCash;

  constructor(
  	 private envoicashService: EnvoicashService,
     private location: Location,
  	 private route:ActivatedRoute) {}

  ngOnInit():void {
    this.route.params.subscribe( (params : Params) => { 
      this.envoiCash = this.envoicashService.getEnvoicash(1);
    });
      this.formvisible=this.route.snapshot.params['id'];
  }

}
