import { Component, OnInit } from '@angular/core';

import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';
import { AdminpdvPerformancepdv }    from '../../models/adminpdv-performancepdv';
import { AdminpdvNotifications }    from '../../models/adminpdv-notifications';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';

@Component({
  selector: 'app-adminpdv-dashboard',
  templateUrl: './adminpdv-dashboard.component.html',
  styleUrls: ['./adminpdv-dashboard.component.css']
})
export class AdminpdvDashboardComponent implements OnInit {

  adminpdvDashboardMontantTransfertParservices: AdminpdvMontantTransferParService;
  adminpdvDashboardPerformancepdv: AdminpdvPerformancepdv[];
  adminpdvDashboardNotifications: AdminpdvNotifications[];

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit(): void {
    this.adminpdvServiceWeb.montanttransfertservice('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardMontantTransfertParservices = adminpdvServiceWebList );
    this.adminpdvServiceWeb.performancepdv('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardPerformancepdv = adminpdvServiceWebList );
    this.adminpdvServiceWeb.notifications('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardNotifications = adminpdvServiceWebList );
  }
  

}
