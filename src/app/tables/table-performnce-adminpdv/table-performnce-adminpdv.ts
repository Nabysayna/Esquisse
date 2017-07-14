import { Component, OnInit } from '@angular/core';

import { AdminmultipdvReclamation }    from '../../models/adminmultipdv-reclamation';
import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';


@Component({
  selector: 'table-performnce-adminpdvtion',
  templateUrl: './table-performnce-adminpdv.html',
  styleUrls: ['./table-performnce-adminpdv.css']
})
export class TablePerformnceAdminpdv implements OnInit {

    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "datereclamation";
    public sortOrder = "asc";

    public adminmultipdvReclamation: AdminmultipdvReclamation[];
  	loading = false ;

	constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.adminmultipdvServiceWeb.historiquereclamation('azrrtt').then(adminmultipdvServiceWebList => {
      console.log(adminmultipdvServiceWebList.response); 
      this.adminmultipdvReclamation = adminmultipdvServiceWebList.response; 
    });

  }

	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.etatreclamation.length;
    }



}
