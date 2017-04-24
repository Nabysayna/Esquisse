import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joni-joni-component',
  templateUrl: './joni-joni-component.component.html',
  styleUrls: ['./joni-joni-component.component.css']
})
export class JoniJoniComponentComponent implements OnInit {
    formvisiblty : boolean ;

    constructor() {this.formvisiblty=true;}
    validform(){}

    ngOnInit() {
    }

}
