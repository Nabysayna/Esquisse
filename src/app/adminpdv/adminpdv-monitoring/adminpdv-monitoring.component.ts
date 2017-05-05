import { Component, OnInit } from '@angular/core';

import { AdminpdvMonitoringService }    from '../../services/adminpdv-monitoring.service';

import { MonitoringDepositAdminpdv }    from '../../models/monitoringdepositadminpdv';
import { Recouvrementadminpdv } from '../../models/recouvrementadminpdv';
import { ConsommationDepositParServiceType } from '../../models/consommationdepositparservicetype';
import { ConsommationDepositParPdv } from '../../models/consommationdepositparpdv';


@Component({
  selector: 'app-adminpdv-monitoring',
  templateUrl: './adminpdv-monitoring.component.html',
  styleUrls: ['./adminpdv-monitoring.component.css']
})
export class AdminpdvMonitoringComponent implements OnInit {

  id: number;
  public recouvrementadminpdvList: Recouvrementadminpdv[];
  public consommationdepositparservicetypeList: ConsommationDepositParServiceType[];
  public consommationdepositparpdvList: ConsommationDepositParPdv[];

  public monitoringDepositAdminpdv: MonitoringDepositAdminpdv;

  // For progreesbar
  public max: number = 100;
  public showWarning: boolean;
  public dynamic: number = 40;
  public type: string;
  
  constructor(private adminpdvMonitoringService: AdminpdvMonitoringService) { }

  ngOnInit() {
    this.id =1;
    
    this.monitoringDepositAdminpdv = this.adminpdvMonitoringService.getMonitoringDepositAdminpdv(this.id);
    this.max = this.monitoringDepositAdminpdv.depositInitial;
    this.dynamic = this.monitoringDepositAdminpdv.depositConsomme;
    if ( this.dynamic <= (this.max*0.5) ){ this.type = 'success'; }
    else if ( (this.dynamic > (this.max*0.5)) && (this.dynamic <= (this.max*0.75)) ){ this.type = 'warning'; }
    else if ( this.dynamic > (this.max*0.75) ){ this.type = 'danger'; }

    this.adminpdvMonitoringService.getRecouvrementadminpdvMock()
      .then(recouvrementadminpdvList => this.recouvrementadminpdvList = recouvrementadminpdvList);
    
    this.adminpdvMonitoringService.getConsommationDepositParServiceTypeMock()
      .then(consommationdepositparservicetypeList => this.consommationdepositparservicetypeList = consommationdepositparservicetypeList);
    
    this.adminpdvMonitoringService.getConsommationDepositParPdvMock()
      .then(consommationdepositparpdvList => this.consommationdepositparpdvList = consommationdepositparpdvList);
    


  }


}