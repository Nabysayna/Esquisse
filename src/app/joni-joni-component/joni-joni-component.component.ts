import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joni-joni-component',
  templateUrl: './joni-joni-component.component.html',
  styleUrls: ['./joni-joni-component.component.css']
})
export class JoniJoniComponentComponent implements OnInit {
  formvisible = true ;
  pn : string ;
  tle : string ; 
  pnd : string ;
  tled : string ;
  mnt : number ;
  constructor() { }
  
  validform(){}

  ngOnInit() {
  }

}
