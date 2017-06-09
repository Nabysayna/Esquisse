import { Component, OnInit } from '@angular/core';

import { UserPdv }    from '../../models/userPdv';
import { UserPdvService }    from '../../services/userPdv.service';

import { AdminpdvUserpdv }    from '../../models/adminpdv-userpdv';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-table-compte-access',
  templateUrl: './table-compte-access.component.html',
  styleUrls: ['./table-compte-access.component.css']
})
export class TableCompteAccessComponent implements OnInit {

  userPdvList: UserPdv[] = [];
  public monitoringAdminpdvUserpdv: AdminpdvUserpdv[];

  
  constructor(private userPdvService: UserPdvService, private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit(): void {
    this.userPdvService.getUserPdvList()
      .then(userPdvList => this.userPdvList = userPdvList.slice(0, 5));

    this.adminpdvServiceWeb.listuserpdv('12345','azrrtt').then(adminpdvServiceWebList => 
      	this.monitoringAdminpdvUserpdv = adminpdvServiceWebList
    );
  }

}
