import { Component, OnInit } from '@angular/core';

import { AdminpdvUserpdv }    from '../../models/adminpdv-userpdv';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-adminpdv-parametrage',
  templateUrl: './adminpdv-parametrage.component.html',
  styleUrls: ['./adminpdv-parametrage.component.css']
})
export class AdminpdvParametrageComponent implements OnInit {

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
