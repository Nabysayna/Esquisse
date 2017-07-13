import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';
import {Color} from 'ng2-charts';
import { ModalDirective } from 'ng2-bootstrap/modal';

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

  adminmultpdvperformancesservices: any;
  loading = false ;
  adminmultipdvActiviteservices: AdminmultipdvActiviteservices;
  AdminmultipdvNombredereclamationagentpdvvente: AdminmultipdvNombredeReclamationAgentPdvVente;
  adminmultipdvDashboardPerformanceagent: AdminmultipdvPerformanceagent[];
  
  @ViewChild('childModal') public childModal:ModalDirective;
  public showChildModal():void {
    this.childModal.show();
  }
  public hideChildModal():void {
    this.childModal.hide();
  }
  
  constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) {}

  ngOnInit(): void {
    this.adminmultipdvServiceWeb.performancesadminpdv('azrrtt').then(adminmultipdvServiceWebList => {
      console.log(adminmultipdvServiceWebList);
      this.adminmultpdvperformancesservices = adminmultipdvServiceWebList ;
      this.datasets = [{
        data: this.adminmultpdvperformancesservices.montanttotal,
        backgroundColor: ["green", "orange", "yellow", "red"]
      }];
    });
        
    this.nombredereclamationagentpdvvente();
    this.activiteservice("Nombre d'opérations par mois");
    this.performanceagent();
    
  }


  
  public colorsEmptyObject: Array<Color> = [{}];
  public datasets: any[];
  public chartClicked(e:any):void { 
    if (e.active[0]){
      console.log(e.active[0]._model.label); 
      this.showChildModal();
    }
  }


  
 

  public nombredereclamationagentpdvvente():void {
    this.adminmultipdvServiceWeb.nombredereclamationagentpdvvente('azrrtt').then(adminpdvServiceWebList => 
      this.AdminmultipdvNombredereclamationagentpdvvente = adminpdvServiceWebList.response 
    );
  }
 
  public performanceagent():void {
    this.adminmultipdvServiceWeb.performanceagent('azrrtt').then(adminmultipdvServiceWebList => 
      this.adminmultipdvDashboardPerformanceagent = adminmultipdvServiceWebList 
    );
  }
 
  // lineChart
  public lineChartData:Array<any>;
  public lineTilte:string;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = { responsive: true };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  public activiteservice(lineTitle):void {
    this.adminmultipdvServiceWeb.activiteservices(lineTitle).then(adminpdvServiceWebList =>{
      this.adminmultipdvActiviteservices = adminpdvServiceWebList;
      this.lineChartData = this.adminmultipdvActiviteservices.datas;
      this.lineChartLabels = this.adminmultipdvActiviteservices.dateactivite;     
      this.lineTilte = this.adminmultipdvActiviteservices.typeactivite;     
    });
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
