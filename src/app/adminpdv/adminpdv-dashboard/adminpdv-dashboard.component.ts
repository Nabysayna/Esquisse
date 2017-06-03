import { Component, OnInit } from '@angular/core';

import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';

@Component({
  selector: 'app-adminpdv-dashboard',
  templateUrl: './adminpdv-dashboard.component.html',
  styleUrls: ['./adminpdv-dashboard.component.css']
})
export class AdminpdvDashboardComponent implements OnInit {

  adminpdvDashboardMontantTransfertParservices: AdminpdvMontantTransferParService;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit(): void {
    this.adminpdvServiceWeb.montanttransfertservice('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardMontantTransfertParservices = adminpdvServiceWebList );
  }
  

}
