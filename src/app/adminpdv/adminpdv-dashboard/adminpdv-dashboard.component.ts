import { Component, OnInit } from '@angular/core';

import { AdminpdvDashboard }    from '../../models/adminpdv-dashboard';
import { AdminpdvDashboardService }    from '../../services/adminpdv-dashboard.service';

@Component({
  selector: 'app-adminpdv-dashboard',
  templateUrl: './adminpdv-dashboard.component.html',
  styleUrls: ['./adminpdv-dashboard.component.css']
})
export class AdminpdvDashboardComponent implements OnInit {

  adminpdvDashboardList: AdminpdvDashboard[] = [];

  constructor(private adminpdvDashboardService: AdminpdvDashboardService) { }

  ngOnInit(): void {
    this.adminpdvDashboardService.getAdminpdvDashboardMock().then(adminpdvDashboardList => this.adminpdvDashboardList = adminpdvDashboardList);
  }
  

}
