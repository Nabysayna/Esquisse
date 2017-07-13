import { Component, OnInit } from '@angular/core';

import { AdminmultipdvReclamation }    from '../../models/adminmultipdv-reclamation';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';
// import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';

@Component({
  selector: 'app-adminpdv-status-reclamation',
  templateUrl: './adminpdv-status-reclamation.component.html',
  styleUrls: ['./adminpdv-status-reclamation.component.css']
})
export class AdminpdvStatusReclamationComponent implements OnInit {

  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "datereclamation";
  public sortOrder = "asc";

  public adminmultipdvReclamation: AdminmultipdvReclamation[];
	loading = false ;

	constructor(private adminmultipdvServiceWeb: AdminpdvServiceWeb) { }

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
