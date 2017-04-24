import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joni-joni-component',
  templateUrl: './joni-joni-component.component.html',
  styleUrls: ['./joni-joni-component.component.css']
})
export class JoniJoniComponentComponent implements OnInit {
<<<<<<< HEAD
    formvisiblty : boolean ;

    constructor() {this.formvisiblty=true;}
    validform(){}
=======
  formvisible = true ;
  pn : string ;
  tel : string ;
  pnd : string ;
  teld : string ;
  mnt : number ;
  constructor() { }
  
  validform(){}
>>>>>>> 9ed5878ac52f0cf2c70dfd8426cbf18bb3b993ef

    ngOnInit() {
    }

}
