import { Component, OnInit } from '@angular/core';

import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';



@Component({
  selector: 'app-adminpdv-monitoring',
  templateUrl: './adminpdv-monitoring.component.html',
  styleUrls: ['./adminpdv-monitoring.component.css']
})
export class AdminpdvMonitoringComponent implements OnInit {

  public monitoringAdminpdvDeposit: any;
  public monitoringAdminpdvConsommationDepositService: any;
  loading = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    // this.loading = true ;
    this.adminpdvServiceWeb.bilandeposit('azrrtt').then(adminpdvServiceWebList => {
      this.monitoringAdminpdvDeposit = adminpdvServiceWebList; 
    });

  }


}