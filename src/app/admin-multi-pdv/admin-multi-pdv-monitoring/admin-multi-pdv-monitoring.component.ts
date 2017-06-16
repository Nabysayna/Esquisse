import { Component, OnInit } from '@angular/core';

import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';



@Component({
  selector: 'app-admin-multi-pdv-monitoring',
  templateUrl: './admin-multi-pdv-monitoring.component.html',
  styleUrls: ['./admin-multi-pdv-monitoring.component.css']
})
export class AdminmultipdvMonitoringComponent implements OnInit {

  // loading = false ;
  labels:string[] = ['Poste Cash', 'Tigo Cash', 'Expresso Cash', 'TNT', 'Joni Joni', 'Wari', 'Orange Money'];
 
  chartData:any = [
    {data: [1000000, 900000, 200000, 500000, 300000, 800000, 100000], label: 'Déposit initial'},
    {data: [280000, 480000, 40000, 190000, 96000, 270000, 10000], label: 'Déposit consommé'},
  ];


  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    // this.loading = true ;

  }

  
  // Bar
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = this.labels;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = this.chartData;


}