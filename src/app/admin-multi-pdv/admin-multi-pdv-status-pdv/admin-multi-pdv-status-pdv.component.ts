import { Component, OnInit } from '@angular/core';

import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';

@Component({
  selector: 'app-admin-multi-pdv-status-pdv',
  templateUrl: './admin-multi-pdv-status-pdv.component.html',
  styleUrls: ['./admin-multi-pdv-status-pdv.component.css']
})
export class AdminmultipdvStatusPdvComponent implements OnInit {

  	
  loading = false ;

  public adminmultipdvListmap: any;

	constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.adminmultipdvServiceWeb.listmap('azrrtt').then(adminmultipdvServiceWebList => {
      this.adminmultipdvListmap = adminmultipdvServiceWebList; 
      this.loading = false ;
    });
  }



}