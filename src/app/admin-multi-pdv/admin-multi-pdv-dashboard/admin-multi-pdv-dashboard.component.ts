import { Component, OnInit } from '@angular/core';

import { AdminmultipdvNombredeReclamationAgentPdvVente }    from '../../models/adminmultipdv-dashboard-nrpv';
import { AdminmultipdvPerformanceagent }    from '../../models/adminmultipdv-dashboard-pa';
import { AdminmultipdvActiviteservices }    from '../../models/adminmultipdv-dashboard-as';
import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';


@Component({
  selector: 'app-admin-multi-pdv-dashboard',
  templateUrl: './admin-multi-pdv-dashboard.component.html',
  styleUrls: ['./admin-multi-pdv-dashboard.component.css']
})
export class AdminmultipdvDashboardComponent implements OnInit {

  loading = false ;
  adminmultipdvActiviteservices: AdminmultipdvActiviteservices;
  AdminmultipdvNombredereclamationagentpdvvente: AdminmultipdvNombredeReclamationAgentPdvVente;
  adminmultipdvDashboardPerformanceagent: AdminmultipdvPerformanceagent[];
  
  constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) {

  }

  ngOnInit(): void {
    
    this.nombredereclamationagentpdvvente();
    this.activiteservice("Nombre d'opérations par mois");
    this.performanceagent();
    
  }
  

  // lineChart
  public lineChartData:Array<any>;
  public lineTilte:string;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = {
    responsive: true
  };
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

  public nombredereclamationagentpdvvente():void {
    this.adminmultipdvServiceWeb.nombredereclamationagentpdvvente('12345','azrrtt').then(adminpdvServiceWebList => 
      this.AdminmultipdvNombredereclamationagentpdvvente = adminpdvServiceWebList 
    );
  }
 
  public activiteservice(lineTitle):void {
    this.adminmultipdvServiceWeb.activiteservices('12345',lineTitle).then(adminpdvServiceWebList =>{
      this.adminmultipdvActiviteservices = adminpdvServiceWebList;
      this.lineChartData = this.adminmultipdvActiviteservices.datas;
      this.lineChartLabels = this.adminmultipdvActiviteservices.dateactivite;     
      this.lineTilte = this.adminmultipdvActiviteservices.typeactivite;     
    });
  }
 
  public performanceagent():void {
    this.adminmultipdvServiceWeb.performanceagent('12345','azrrtt').then(adminmultipdvServiceWebList => 
      this.adminmultipdvDashboardPerformanceagent = adminmultipdvServiceWebList 
    );
  }
 
  public activiteserviceparno():void {
    this.activiteservice("Nombre d'opérations par mois");
  }
 
  public activiteserviceparmp():void {
    this.activiteservice("Montant perçus par mois");
  }
 
  public activiteserviceparmd():void {
    this.activiteservice("Montant donnés par mois");
  }
 
  
}
