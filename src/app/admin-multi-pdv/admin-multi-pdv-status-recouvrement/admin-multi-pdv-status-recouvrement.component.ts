import { Component, OnInit } from '@angular/core';

import { AdminmultipdvRecouvrement }    from '../../models/adminmultipdv-recouvrement';
import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';

@Component({
  selector: 'app-admin-multi-pdv-status-recouvrement',
  templateUrl: './admin-multi-pdv-status-recouvrement.component.html',
  styleUrls: ['./admin-multi-pdv-status-recouvrement.component.css']
})
export class AdminmultipdvStatusRecouvrementComponent implements OnInit {

  	
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "daterecouvrement";
    public sortOrder = "desc";

    public adminmultipdvRecouvrement: AdminmultipdvRecouvrement[];
  	loading = false ;

	constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    this.adminmultipdvServiceWeb.historiquerecouvrement('12345','azrrtt').then(adminmultipdvServiceWebList => {
      this.adminmultipdvRecouvrement = adminmultipdvServiceWebList; 
    });

  }

	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.datereclamation.length;
    }



}
