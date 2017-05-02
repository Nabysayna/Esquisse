import { Component, OnInit } from '@angular/core';

import { UserPdv }    from '../../models/userPdv';
import { UserPdvService }    from '../../services/userPdv.service';

@Component({
  selector: 'app-table-compte-access',
  templateUrl: './table-compte-access.component.html',
  styleUrls: ['./table-compte-access.component.css']
})
export class TableCompteAccessComponent implements OnInit {

  userPdvList: UserPdv[] = [];
  
  constructor(private userPdvService: UserPdvService) { }

  ngOnInit(): void {
    this.userPdvService.getUserPdvList()
      .then(userPdvList => this.userPdvList = userPdvList.slice(0, 5));
  }

}
