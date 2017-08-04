import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';
import {Color} from 'ng2-charts';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { AdminmultipdvMajcaution }    from '../../models/adminmultipdv-majcaution';
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

  public lineChartData:Array<any>;
  public lineTilte:string;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = { responsive: true };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  adminmultpdvperformancesservices: any;
  loading = false ;
  adminmultipdvActiviteservices: any;
  AdminmultipdvNombredereclamationagentpdvvente: AdminmultipdvNombredeReclamationAgentPdvVente;
  adminmultipdvDashboardPerformanceagent: AdminmultipdvPerformanceagent[];

  public checkPerformance:any = {journee: true, semaine: false, mois: false};
  typeperformance:string = " dans la journée";
  detailperformancepdv:any;
  performancepdv:any;

  
  @ViewChild('childModal') public childModal:ModalDirective;
  public showChildModal():void {
    this.childModal.show();
  }
  public hideChildModal():void {
    this.childModal.hide();
  }

  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "adminpdv";
  public sortOrder = "desc";
  public adminmultipdvMajcaution: AdminmultipdvMajcaution[];
  inputCaution: number;
  majcaution:AdminmultipdvMajcaution;
  

  constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) {}

  ngOnInit(): void {
    this.nombredereclamationagentpdvvente();
    this.activiteservice("Nombre d'opérations par mois");
    this.estcheckPerformance('journee');
  }
  
  public colorsEmptyObject: Array<Color> = [{}];
  public datasets: any[];
  public chartClicked(e:any):void { 
    if (e.active[0]){
      this.estdetailPerformance(e.active[0]._model.label);
      this.showChildModal();
    }
  } 

  public nombredereclamationagentpdvvente():void {
    this.adminmultipdvServiceWeb.nombredereclamationagentpdvvente('azrrtt').then(adminpdvServiceWebList => 
      this.AdminmultipdvNombredereclamationagentpdvvente = adminpdvServiceWebList.response
    );
  }
  
  public performancesadminclasserbydate(type:string):void {
    console.log(type);
    this.adminmultipdvServiceWeb.performancesadminclasserbydate(type).then(adminmultipdvServiceWebList => {
      this.adminmultpdvperformancesservices = adminmultipdvServiceWebList.response ;
      this.datasets = [{
        data: this.adminmultpdvperformancesservices.montanttotal,
        backgroundColor: ["green", "orange", "yellow", "red"]
      }];
    });
  }
 
  public activiteservice(lineTitle):void {
    this.adminmultipdvServiceWeb.activiteservices(lineTitle).then(adminpdvServiceWebList =>{
      this.adminmultipdvActiviteservices = adminpdvServiceWebList.response;
      this.lineChartData = this.adminmultipdvActiviteservices.datas;
      this.lineChartLabels = this.adminmultipdvActiviteservices.dateactivite;     
      this.lineTilte = this.adminmultipdvActiviteservices.typeactivite;     
    });
  }
  

  estcheckPerformance(type: string){
    if(type == 'journee'){
      this.checkPerformance.journee = true;
      this.checkPerformance.semaine = false;
      this.checkPerformance.mois = false;
      this.typeperformance = "dans la journée";

      this.detailperformancepdv = null;
      this.performancepdv = null;
    }
    else if(type == 'semaine'){
      this.checkPerformance.journee = false;
      this.checkPerformance.semaine = true;
      this.checkPerformance.mois = false;
      this.typeperformance = "dans la semaine";

      this.detailperformancepdv = null;
      this.performancepdv = null;
    }
    else if(type == 'mois'){
      this.checkPerformance.journee = false;
      this.checkPerformance.semaine = false;
      this.checkPerformance.mois = true;
      this.typeperformance = "dans le mois";
      
      this.detailperformancepdv = null;
      this.performancepdv = null;
    }
    this.performancesadminclasserbydate(type);
  }

  estdetailPerformance(lot:string){
    let type:string="";
    if (this.checkPerformance.journee) {
      type = "journee";
    }
    if (this.checkPerformance.semaine) {
      type = "semaine";
    }
    if (this.checkPerformance.mois) {
      type = "mois";
    }
    console.log(type+' '+lot);
    
    this.loading = true ;
    this.adminmultipdvServiceWeb.listmajcautions('azrrtt').then(adminmultipdvServiceWebList => {
      console.log(adminmultipdvServiceWebList);
      if(adminmultipdvServiceWebList.errorCode == 1){
        this.adminmultipdvMajcaution = adminmultipdvServiceWebList.response; 
      }
      else{
       this.adminmultipdvMajcaution = []; 
      }
      this.loading = false ;
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
