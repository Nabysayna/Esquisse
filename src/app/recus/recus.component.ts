import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recus',
  templateUrl: './recus.component.html',
  styleUrls: ['./recus.component.css']
})
export class RecusComponent implements OnInit {

    formvisible = '' ;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
      this.formvisible=this.route.snapshot.params['id'];
  }

}
