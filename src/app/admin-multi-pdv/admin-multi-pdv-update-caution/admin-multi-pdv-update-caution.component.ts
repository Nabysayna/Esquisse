import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';

import { AdminmultipdvMajcaution }    from '../../models/adminmultipdv-majcaution';
import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';


@Component({
  selector: 'app-admin-multi-pdv-update-caution',
  templateUrl: './admin-multi-pdv-update-caution.component.html',
  styleUrls: ['./admin-multi-pdv-update-caution.component.css']
})
export class AdminmultipdvUpdateCautionComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

	public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "agent";
    public sortOrder = "desc";

    public adminmultipdvMajcaution: AdminmultipdvMajcaution[];
    loading = false ;

    inputCaution: number;
    majcaution:AdminmultipdvMajcaution;
  constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.adminmultipdvServiceWeb.listmajcautions('azrrtt').then(adminmultipdvServiceWebList => {
      this.adminmultipdvMajcaution = adminmultipdvServiceWebList; 
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
      return a.agent.length;
  }

  public maj(item):void {
    this.inputCaution = null;
    this.majcaution = item;
  }

  public validermaj(item):void {
    this.loading = true ;
    this.adminmultipdvServiceWeb.modifymajcaution('azrrtt', this.majcaution.idagent, this.inputCaution).then(adminmultipdvServiceWebList => {
      console.log(adminmultipdvServiceWebList); 
      this.closeModal();
      this.loading = false ;
    });
  }

}