import { Component, OnInit, Input } from '@angular/core';

import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';


@Component({
  selector: 'app-geomap-component',
  templateUrl: './geomap-component.component.html',
  styleUrls: ['./geomap-component.component.css']
})
export class GeomapComponentComponent implements OnInit {

  @Input() markers: marker[];

  title: string = 'Géo Map';
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  
  constructor() { }

  ngOnInit() {
  	console.log(this.markers);
  }

// google maps zoom level
  zoom: number = 7;
  
  // initial center position for the map
  centreDepartement:any[] = [
    {region: 'Dakar', name: 'Dakar', lat: 14.6937000, lng: -17.4440600, zoom: 9},
    {region: 'Dakar', name: 'Pikine', lat: 14.7645700, lng: -17.3907100, zoom: 11},
    {region: 'Dakar', name: 'Guediawaye', lat: 14.7828199, lng: -17.376013, zoom: 11},
    {region: 'Dakar', name: 'Rufisque', lat: 14.71554, lng: -17.270929, zoom: 11},
    {region: 'Thies', name: 'Thies', lat: 14.8341700, lng: -17.1061100, zoom: 9},
    {region: 'Thies', name: 'Mbour', lat: 14.4228422, lng: -16.9653756, zoom: 11},
    {region: 'Thies', name: 'Bambey', lat: 14.70074000, lng: -16.45911000, zoom: 11},
  ]
  
  dakar: marker[] = [
    {title: 'Dakar', content: 'Dakar', lat: 14.6937000, lng: -17.4440600},
    {title: 'Dakar', content: 'Pikine', lat: 14.7645700, lng: -17.3907100},
    {title: 'Dakar', content: 'Guediawaye', lat: 14.7828199, lng: -17.376013},
    {title: 'Dakar', content: 'Rufisque', lat: 14.71554, lng: -17.270929},
  ]

  thies: marker[] = [
    {title: 'Thies', content: 'Thies', lat: 14.8341700, lng: -17.1061100},
    {title: 'Thies', content: 'Mbour', lat: 14.4228422, lng: -16.9653756},
    {title: 'Thies', content: 'Bambey', lat: 14.70074000, lng: -16.45911000},
  ]

  lat: number = 14.716447783648722;
  lng: number = -15.32318115234375;
  
  public groupSelected:string;
  public nameSelected:string = 'Tous';
  
  public typeaheadOnSelect(e: TypeaheadMatch): void {
    this.nameSelected = this.groupSelected;
    this.lat = e.item.lat;
    this.lng = e.item.lng;
    this.zoom = e.item.zoom;
    if(e.value == "Dakar") this.markers = this.dakar;
    if(e.value == "Thies") this.markers = this.thies;
    console.log(e.item);
  }

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }
 
  public changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }
 

}

// just an interface for type safety.
interface marker {
	lat: number;
  lng: number;
	label?: string;
	title?: string;
	content?: string;
}