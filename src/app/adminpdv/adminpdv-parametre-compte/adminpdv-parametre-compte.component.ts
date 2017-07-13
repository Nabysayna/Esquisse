import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';

import { AdminpdvUserpdv }    from '../../models/adminpdv-userpdv';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-adminpdv-parametre-compte',
  templateUrl: './adminpdv-parametre-compte.component.html',
  styleUrls: ['./adminpdv-parametre-compte.component.css']
})
export class AdminpdvparametrecompteComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

	public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "pdv";
  public sortOrder = "desc";

  public monitoringAdminpdvUserpdv: any;
  loading = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.adminpdvServiceWeb.listuserpdv('12345','azrrtt').then(adminpdvServiceWebList => {
      console.log(adminpdvServiceWebList);
      this.monitoringAdminpdvUserpdv = adminpdvServiceWebList;
      this.loading = false ;
    });

  }

  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
  
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.pdv.length;
  }

  public modif(item):void {

  }

  public validermodif():void {

  }

  public deconnectionsession(idpdv):void {
    
  }

}