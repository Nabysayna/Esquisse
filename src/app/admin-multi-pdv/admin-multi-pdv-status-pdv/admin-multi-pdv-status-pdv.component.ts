import { Component, OnInit } from '@angular/core';

import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';
import { MapsServiceWeb } from '../../webServiceClients/Maps/maps.service';

@Component({
  selector: 'app-admin-multi-pdv-status-pdv',
  templateUrl: './admin-multi-pdv-status-pdv.component.html',
  styleUrls: ['./admin-multi-pdv-status-pdv.component.css'],
  providers: [ MapsServiceWeb ]
})
export class AdminmultipdvStatusPdvComponent implements OnInit {

  	
  loading = false ;

  public adminmultipdvListmap: any;

	constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb, private mapsServiceWeb: MapsServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.mapsServiceWeb.listmaps('azrrtt').then(mapsServiceWebList => {
      this.adminmultipdvListmap = mapsServiceWebList; 
      this.loading = false ;
    });
  }



}