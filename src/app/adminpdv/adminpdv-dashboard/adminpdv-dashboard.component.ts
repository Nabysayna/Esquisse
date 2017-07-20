import { Component, OnInit } from '@angular/core';

import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';

@Component({
  selector: 'app-adminpdv-dashboard',
  templateUrl: './adminpdv-dashboard.component.html',
  styleUrls: ['./adminpdv-dashboard.component.css']
})
export class AdminpdvDashboardComponent implements OnInit {

  adminpdvDashboardMontantTransfertParservices: any;
  adminpdvDashboardPerformancepdv: any;
  adminpdvDashboardNbreReclVente: any;
  loading = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit(): void {
    this.adminpdvServiceWeb.nombredereclamationpdvvente('azrrtt').then(adminpdvServiceWebList => {
      console.log(adminpdvServiceWebList);
      this.adminpdvDashboardNbreReclVente = adminpdvServiceWebList.response ;
    });
    
    this.adminpdvServiceWeb.performancepdv('azrrtt').then(adminpdvServiceWebList => {
      console.log(adminpdvServiceWebList); 
      this.adminpdvDashboardPerformancepdv = adminpdvServiceWebList; 
    });
  }
  

}
