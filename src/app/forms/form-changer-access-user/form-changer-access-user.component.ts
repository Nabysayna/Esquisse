import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { UserPdvService }    from '../../services/userPdv.service';
import { UserPdv }    from '../../models/userPdv';


@Component({
  selector: 'app-form-changer-access-user',
  templateUrl: './form-changer-access-user.component.html',
  styleUrls: ['./form-changer-access-user.component.css']
})

export class FormChangerAccessUserComponent implements OnInit {
  submitted = false;
  title = "Modifier access pdv";
  
  id: number;
  userPdv: UserPdv;
  confirmPassword = 'test';

  constructor(
    private userPdvService: UserPdvService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params : Params) => { 
      this.id = +params["id"];
      this.userPdv = this.userPdvService.getUserPdv(this.id);
      this.confirmPassword = this.userPdv.password;
    });
  }


  goBack(): void {
    this.location.back();
  }

  validate(): void {
    if (this.userPdv.password === this.confirmPassword) {
      this.submitted = true;
    }
    
  }

}