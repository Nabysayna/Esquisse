import { Component, OnInit } from '@angular/core';

import { AdminpdvDeposit }    from '../../models/adminpdv-deposit';
import { AdminpdvConsommationDepositService }    from '../../models/adminpdv-cds';
import { AdminpdvConsommationDepositPdv }    from '../../models/adminpdv-cdpdv';
import { AdminpdvRecouvrement }    from '../../models/adminpdv-recouvrement';
import { AdminpdvReclamation }    from '../../models/adminpdv-reclamation';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';



@Component({
  selector: 'app-admin-multi-pdv-monitoring',
  templateUrl: './admin-multi-pdv-monitoring.component.html',
  styleUrls: ['./admin-multi-pdv-monitoring.component.css']
})
export class AdminmultipdvMonitoringComponent implements OnInit {

  public monitoringAdminpdvDeposit: AdminpdvDeposit;
  public monitoringAdminpdvConsommationDepositService: AdminpdvConsommationDepositService[];
  public monitoringAdminpdvConsommationDepositPdv: AdminpdvConsommationDepositPdv[];
  public monitoringAdminpdvRecouvrement: AdminpdvRecouvrement[];
  public monitoringAdminpdvReclamation: AdminpdvReclamation[];
  loading = false ;

  // For progreesbar
  public max: number;
  public showWarning: boolean;
  public dynamic: number;
  public type: string;
  
  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.adminpdvServiceWeb.bilandeposit('12345','azrrtt').then(adminpdvServiceWebList => {
      this.monitoringAdminpdvDeposit = adminpdvServiceWebList; 
      this.max = this.monitoringAdminpdvDeposit.depositInitial;
      this.dynamic = this.monitoringAdminpdvDeposit.depositConsomme;
      if ( this.dynamic <= (this.max*0.5) ){ this.type = 'success'; }
      else if ( (this.dynamic > (this.max*0.5)) && (this.dynamic <= (this.max*0.75)) ){ this.type = 'warning'; }
      else if ( this.dynamic > (this.max*0.75) ){ this.type = 'danger'; }
    });

    this.adminpdvServiceWeb.consommationdepositservice('12345','azrrtt').then(adminpdvServiceWebList => 
      this.monitoringAdminpdvConsommationDepositService = adminpdvServiceWebList 
    );

    this.adminpdvServiceWeb.consommationdepositpdv('12345','azrrtt').then(adminpdvServiceWebList => 
      {this.monitoringAdminpdvConsommationDepositPdv = adminpdvServiceWebList ;
       this.loading = false });

    this.adminpdvServiceWeb.historiquerecouvrement('12345','azrrtt').then(adminpdvServiceWebList => 
      this.monitoringAdminpdvRecouvrement = adminpdvServiceWebList
    );

    this.adminpdvServiceWeb.historiquereclamation('12345','azrrtt').then(adminpdvServiceWebList => 
      this.monitoringAdminpdvReclamation = adminpdvServiceWebList
    );


  }


}