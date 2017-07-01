import { Component, OnInit, Input } from '@angular/core';

import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';
import { MapsServiceWeb } from '../webServiceClients/Maps/maps.service';


@Component({
  selector: 'app-geomap-component',
  templateUrl: './geomap-component.component.html',
  styleUrls: ['./geomap-component.component.css'],
  providers: [ MapsServiceWeb ]
})
export class GeomapComponentComponent implements OnInit {

  @Input() markers: marker[];

  title: string = 'Géo Map';
  listDepartement: any[];
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;

  loading = false ;

  
  constructor(private mapsServiceWeb: MapsServiceWeb) { }

  ngOnInit() {
    this.loading = true;
  	console.log(this.markers);
    this.mapsServiceWeb.listmapsdepart('type').then(mapsServiceWebList => {
      this.listDepartement = mapsServiceWebList; 
      this.loading = false ;
    });
    
  }

  // google maps zoom level
  zoom: number = 7;
  lat: number = 14.716447783648722;
  lng: number = -15.32318115234375;
  
  public groupSelected:string;
  public nameSelected:string = 'Tous';
  
  public typeaheadOnSelect(e: TypeaheadMatch): void {
    this.nameSelected = this.groupSelected;
    this.lat = e.item.lat;
    this.lng = e.item.lng;
    console.log(e.value);
    this.mapsServiceWeb.listmapspardepart(e.value).then(mapsServiceWebList => {
      console.log(mapsServiceWebList); 
      this.markers = mapsServiceWebList; 
      this.zoom = 9;
    });
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