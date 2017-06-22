import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geomap-component',
  templateUrl: './geomap-component.component.html',
  styleUrls: ['./geomap-component.component.css']
})
export class GeomapComponentComponent implements OnInit {

  @Input() markers: marker[];

  title: string = 'Géo Map';
  
  constructor() { }

  ngOnInit() {
  	console.log(this.markers);
  }

// google maps zoom level
  zoom: number = 7;
  
  // initial center position for the map
  lat: number = 14.716447783648722;
  lng: number = -15.32318115234375;
  
  
}

// just an interface for type safety.
interface marker {
	lat: number;
  lng: number;
	label?: string;
	title?: string;
	content?: string;
}