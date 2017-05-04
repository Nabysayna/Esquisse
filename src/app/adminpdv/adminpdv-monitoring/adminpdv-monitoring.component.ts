import { Component, OnInit } from '@angular/core';

import { MonitoringDepositAdminpdvService }    from '../../services/monitoringdepositadminpdv.service';
import { MonitoringDepositAdminpdv }    from '../../models/monitoringdepositadminpdv';

import { RecouvrementadminpdvService } from '../../services/recouvrementadminpdv.service';
import { Recouvrementadminpdv } from '../../models/recouvrementadminpdv';

import { ConsommationDepositParServiceTypeService } from '../../services/consommationdepositparservicetype.service';
import { ConsommationDepositParServiceType } from '../../models/consommationdepositparservicetype';

import { ConsommationDepositParPdvService } from '../../services/consommationdepositparpdv.service';
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
  
  constructor(
    private monitoringDepositAdminpdvService: MonitoringDepositAdminpdvService,
    private consommationdepositparservicetypeService: ConsommationDepositParServiceTypeService,
    private consommationdepositparpdvService: ConsommationDepositParPdvService,
    private recouvrementadminpdvService: RecouvrementadminpdvService
   ) { }

  ngOnInit() {
    this.id =1;
    
    this.monitoringDepositAdminpdv = this.monitoringDepositAdminpdvService.getMonitoringDepositAdminpdv(this.id);

    this.recouvrementadminpdvService.getRecouvrementadminpdvMock()
      .then(recouvrementadminpdvList => this.recouvrementadminpdvList = recouvrementadminpdvList);
    
    this.consommationdepositparservicetypeService.getConsommationDepositParServiceTypeMock()
      .then(consommationdepositparservicetypeList => this.consommationdepositparservicetypeList = consommationdepositparservicetypeList);
    
    this.consommationdepositparpdvService.getConsommationDepositParPdvMock()
      .then(consommationdepositparpdvList => this.consommationdepositparpdvList = consommationdepositparpdvList);
    

  }


}

