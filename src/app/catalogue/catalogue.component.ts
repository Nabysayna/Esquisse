import { Component, OnInit } from '@angular/core';

export class Article {
	public nomImg:string;
	public designation:string;
	public prix:number;
	
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

   articles:Article[][] =[[{nomImg:"n", designation:"Chaussures homme", prix:18000},{nomImg:"nf", designation:"Chaussures femme", prix:15000},{nomImg:"hs", designation:"soulier homme", prix:20000},{nomImg:"es", designation:"soulier enfant", prix:12000},{nomImg:"fs", designation:"soulier femme", prix:18000}],
   [{nomImg:"bha", designation:"basket homme", prix:13000},{nomImg:"bfa", designation:"basket femme", prix:11000},{nomImg:"bea", designation:"basket enfant", prix:9000},{nomImg:"bbb", designation:"chaussures bb", prix:8000},{nomImg:"mc", designation:"montre couple", prix:21000}]];


  constructor() { }

  ngOnInit() {
  }

}
