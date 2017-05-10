import { Component, OnInit } from '@angular/core';

import { AdminpdvDashboard }    from '../../models/adminpdv-dashboard';
import { AdminpdvDashboardService }    from '../../services/adminpdv-dashboard.service';

@Component({
  selector: 'app-adminpdv-dashboard',
  templateUrl: './adminpdv-dashboard.component.html',
  styleUrls: ['./adminpdv-dashboard.component.css']
})
export class AdminpdvDashboardComponent implements OnInit {

	public doughnutChartLabels:string[] = ['Post-Cash', 'TNT', 'Joni-Joni', 'Expresso-Cash'];
  	public doughnutChartData:number[] = [350000, 550000, 100000, 200000];

  adminpdvDashboardList: AdminpdvDashboard[] = [];

  constructor(private adminpdvDashboardService: AdminpdvDashboardService) { }

  ngOnInit(): void {
    this.adminpdvDashboardService.getAdminpdvDashboardMock().then(adminpdvDashboardList => this.adminpdvDashboardList = adminpdvDashboardList);
  }
  

}
