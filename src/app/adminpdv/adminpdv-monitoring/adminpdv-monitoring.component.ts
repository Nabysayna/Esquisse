import { Component, OnInit } from '@angular/core';

import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-adminpdv-monitoring',
  templateUrl: './adminpdv-monitoring.component.html',
  styleUrls: ['./adminpdv-monitoring.component.css']
})
export class AdminpdvMonitoringComponent implements OnInit {

  public monitoringAdminpdvDeposit: any;
  public monitoringAdminpdvConsommationDepositService: any;
  loading = false ;
  selectdemanretrait=false;
  montant:number;
  ibanExcessif = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    this.adminpdvServiceWeb.bilandeposit('azrrtt').then(adminpdvServiceWebList => {
      this.monitoringAdminpdvDeposit = adminpdvServiceWebList.response; 
    });
  }

    validerdmde(){
      this.selectdemanretrait = false;
      if (this.monitoringAdminpdvDeposit.etatdeposit < this.montant){
        this.ibanExcessif = true ;
        return 1 ;
      }

      this.loading = true ;
      this.adminpdvServiceWeb.demandeRetrait(this.montant.toString()).then(adminpdvserviceList => {
        this.loading = false ;
        this.montant = undefined ;
      });

    }

    clickeddemanderetrait(){
      this.selectdemanretrait = true;
    }
}