import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})

export class ECommerceComponent implements OnInit {
  codecmd = "" ;
  constructor() { }

  ngOnInit() {
  }

  recupInfosCmd(){
  	console.log("Récupèration des informations relatives à la présente commande.") ;
  }

}
