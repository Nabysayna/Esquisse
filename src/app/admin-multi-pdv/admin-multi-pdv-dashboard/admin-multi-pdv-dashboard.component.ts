import { Component, OnInit } from '@angular/core';

import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';
import { AdminpdvPerformancepdv }    from '../../models/adminpdv-performancepdv';
import { AdminpdvNotifications }    from '../../models/adminpdv-notifications';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';

@Component({
  selector: 'app-admin-multi-pdv-dashboard',
  templateUrl: './admin-multi-pdv-dashboard.component.html',
  styleUrls: ['./admin-multi-pdv-dashboard.component.css']
})
export class AdminmultipdvDashboardComponent implements OnInit {

  adminpdvDashboardMontantTransfertParservices: AdminpdvMontantTransferParService;
  adminpdvDashboardPerformancepdv: AdminpdvPerformancepdv[];
  adminpdvDashboardNotifications: AdminpdvNotifications[];
  loading = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit(): void {
    this.loading = true ;
    this.adminpdvServiceWeb.montanttransfertservice('12345','azrrtt').then(adminpdvServiceWebList => {this.adminpdvDashboardMontantTransfertParservices = adminpdvServiceWebList ;
      this.loading = false} );
    this.adminpdvServiceWeb.performancepdv('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardPerformancepdv = adminpdvServiceWebList );
    this.adminpdvServiceWeb.notifications('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardNotifications = adminpdvServiceWebList );
  }
  

}
