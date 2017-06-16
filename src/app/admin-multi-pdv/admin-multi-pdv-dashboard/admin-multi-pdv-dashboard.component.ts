import { Component, OnInit } from '@angular/core';

import { AdminpdvDeposit }    from '../../models/adminpdv-deposit';
import { AdminpdvConsommationDepositService }    from '../../models/adminpdv-cds';
import { AdminpdvConsommationDepositPdv }    from '../../models/adminpdv-cdpdv';
import { AdminpdvRecouvrement }    from '../../models/adminpdv-recouvrement';
import { AdminpdvReclamation }    from '../../models/adminpdv-reclamation';

import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';
import { AdminpdvPerformancepdv }    from '../../models/adminpdv-performancepdv';
import { AdminpdvNotifications }    from '../../models/adminpdv-notifications';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-admin-multi-pdv-dashboard',
  templateUrl: './admin-multi-pdv-dashboard.component.html',
  styleUrls: ['./admin-multi-pdv-dashboard.component.css']
})
export class AdminmultipdvDashboardComponent implements OnInit {

  public monitoringAdminpdvDeposit: AdminpdvDeposit;
  public monitoringAdminpdvConsommationDepositService: AdminpdvConsommationDepositService[];
  public monitoringAdminpdvConsommationDepositPdv: AdminpdvConsommationDepositPdv[];
  public monitoringAdminpdvRecouvrement: AdminpdvRecouvrement[];
  public monitoringAdminpdvReclamation: AdminpdvReclamation[];

  // For progreesbar
  public max: number;
  public showWarning: boolean;
  public dynamic: number;
  public type: string;
  
  adminpdvDashboardMontantTransfertParservices: AdminpdvMontantTransferParService;
  adminpdvDashboardPerformancepdv: AdminpdvPerformancepdv[];
  adminpdvDashboardNotifications: AdminpdvNotifications[];
  loading = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit(): void {
    
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



    this.loading = true ;
    this.adminpdvServiceWeb.montanttransfertservice('12345','azrrtt').then(adminpdvServiceWebList => {this.adminpdvDashboardMontantTransfertParservices = adminpdvServiceWebList ;
      this.loading = false} );
    this.adminpdvServiceWeb.performancepdv('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardPerformancepdv = adminpdvServiceWebList );
    this.adminpdvServiceWeb.notifications('12345','azrrtt').then(adminpdvServiceWebList => this.adminpdvDashboardNotifications = adminpdvServiceWebList );
  }
  

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'PosteCash'},
    {data: [28, 48, 40, 19, 86, 40, 90], label: 'TigoCash'},
    {data: [18, 48, 77, 9, 100, 27, 19], label: 'ExpressoCash'},
    {data: [18, 48, 65, 55, 19, 27, 40], label: 'Joni-Joni'},
    {data: [55, 56, 77, 9, 100, 40, 40], label: 'TNT'},
    {data: [56, 48, 77, 9, 19, 27, 65], label: 'RIA'},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // dark grey
      backgroundColor: 'rgba(79,80,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,89,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(79,83,90,1)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(118,159,177,0.2)',
      borderColor: 'rgba(148,159,117,1)',
      pointBackgroundColor: 'rgba(118,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.5)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
