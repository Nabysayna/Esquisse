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

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    this.adminpdvServiceWeb.bilandeposit('azrrtt').then(adminpdvServiceWebList => {
      this.monitoringAdminpdvDeposit = adminpdvServiceWebList.response; 
    });



  }

    validerdmde(){
      this.selectdemanretrait = false;
      // this.loading = true ;
      // this.adminpdvServiceWeb.montant(this.token).then(adminpdvserviceList => {
      //   this.montant = adminpdvserviceList;
      //   this.loading = false ;
      // });

    }

    clickeddemanderetrait(){
      this.selectdemanretrait = true;
    }
}