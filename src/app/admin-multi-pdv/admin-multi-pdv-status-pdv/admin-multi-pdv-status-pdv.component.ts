import { Component, OnInit } from '@angular/core';

import { AdminmultipdvServiceWeb } from '../../webServiceClients/Adminmultipdv/adminmultipdv.service';

@Component({
  selector: 'app-admin-multi-pdv-status-pdv',
  templateUrl: './admin-multi-pdv-status-pdv.component.html',
  styleUrls: ['./admin-multi-pdv-status-pdv.component.css']
})
export class AdminmultipdvStatusPdvComponent implements OnInit {

  	
  loading = false ;

  markers = [
    {
      position: {lat: 14.693858, lng: -17.445982},
      label: 'A',
      title: 'AA',
      content: 'AA',
    },
    {
      position: {lat: 14.693958, lng: -16.445882},
      label: 'B',
      title: 'BB',
      content: 'BB',
    },
    {
      position: {lat: 15.20998780073036, lng: -15.8697509765625},
      label: 'C',
      title: 'CC',
      content: 'CC',
    },
    {
      position: {lat: 14.291000538604875, lng: -16.61956787109375},
      label: 'D',
      title: 'D',
      content: 'D',
    },
    {
      position: {lat: 14.223858, lng: -16.195982},
      label: 'E',
      title: 'E',
      content: 'E',
    },
    {
      position: {lat: 14.823858, lng: -16.095982},
      label: 'F',
      title: 'F',
      content: 'F',
    }
  ]

	constructor(private adminmultipdvServiceWeb: AdminmultipdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;
    
  }



}