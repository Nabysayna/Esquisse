import { Component, OnInit } from '@angular/core';

import { AdminpdvUserpdv }    from '../../models/adminpdv-userpdv';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-admin-multi-pdv-demande-retrait',
  templateUrl: './admin-multi-pdv-demande-retrait.component.html',
  styleUrls: ['./admin-multi-pdv-demande-retrait.component.css']
})
export class AdminmultipdvDemandeRetraitComponent implements OnInit {

  listeuser:boolean = true;
  modifyuser:boolean = false;

  public monitoringAdminpdvUserpdv: AdminpdvUserpdv[];

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit() {
  	this.adminpdvServiceWeb.listuserpdv('12345','azrrtt').then(adminpdvServiceWebList => 
      	this.monitoringAdminpdvUserpdv = adminpdvServiceWebList
    );
  }

  validate(): void {
    // if (this.userPdv.password === this.confirmPassword) {
    //   this.submitted = true;
  }

}
