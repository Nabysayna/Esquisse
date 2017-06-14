import { Component, OnInit } from '@angular/core';

// import { AdminpdvMontantTransferParService }    from '../../models/adminpdv-mtps';
// import { AdminpdvPerformancepdv }    from '../../models/adminpdv-performancepdv';
// import { AdminpdvNotifications }    from '../../models/adminpdv-notifications';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';

@Component({
  selector: 'app-admin-multi-pdv-dashboard',
  templateUrl: './admin-multi-pdv-dashboard.component.html',
  styleUrls: ['./admin-multi-pdv-dashboard.component.css']
})
export class AdminmultipdvDashboardComponent implements OnInit {

  // loading = false ;
  labels:string[] = ['Poste Cash', 'Tigo Cash', 'Expresso Cash', 'TNT', 'Joni Joni', 'Wari', 'Orange Money'];
 
  chartData:any = [
    {data: [280000, 480000, 40000, 190000, 96000, 270000, 10000], label: 'Déposit consommé'},
    {data: [1000000, 900000, 200000, 500000, 300000, 800000, 100000], label: 'Déposit initial'},
  ];

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) {

  }

  ngOnInit(): void {
    // this.loading = true ;
  }
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
 
  public randomize():void {
    // // Only Change 3 values
    // let data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   (Math.random() * 100),
    //   56,
    //   (Math.random() * 100),
    //   40];
    // let clone = JSON.parse(JSON.stringify(this.barChartData));
    // clone[0].data = data;
    // this.barChartData = clone;
  }

  // Radar
  public radarChartLabels:string[] = ['Poste Cash', 'Tigo Cash', 'Expresso Cash', 'TNT', 'Joni Joni', 'Wari', 'Orange Money'];
 
  public radarChartData:any = [
    {data: [280000, 480000, 40000, 190000, 96000, 270000, 10000], label: 'Déposit consommé'},
    {data: [1000000, 900000, 200000, 500000, 300000, 800000, 100000], label: 'Déposit initial'},
  ];
  public radarChartType:string = 'radar';
 

}
