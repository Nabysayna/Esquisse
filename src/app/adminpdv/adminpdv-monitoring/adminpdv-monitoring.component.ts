import { Component, OnInit } from '@angular/core';

import { MonitoringDepositAdminpdvService }    from '../../services/monitoringdepositadminpdv.service';
import { MonitoringDepositAdminpdv }    from '../../models/monitoringdepositadminpdv';

@Component({
  selector: 'app-adminpdv-monitoring',
  templateUrl: './adminpdv-monitoring.component.html',
  styleUrls: ['./adminpdv-monitoring.component.css']
})
export class AdminpdvMonitoringComponent implements OnInit {

	id: number;
  public monitoringDepositAdminpdv: MonitoringDepositAdminpdv;
  
  constructor(private monitoringDepositAdminpdvService: MonitoringDepositAdminpdvService) { }

  ngOnInit() {
  	this.id =1;
  	this.monitoringDepositAdminpdv = this.monitoringDepositAdminpdvService.getMonitoringDepositAdminpdv(this.id);
    console.log(this.monitoringDepositAdminpdv);
  }

}

