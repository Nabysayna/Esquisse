import { Component, OnInit } from '@angular/core';

import { AdminpdvUserpdv }    from '../../models/adminpdv-userpdv';
import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-admin-multi-pdv-demande-retrait',
  templateUrl: './admin-multi-pdv-demande-retrait.component.html',
  styleUrls: ['./admin-multi-pdv-demande-retrait.component.css']
})
export class AdminmultipdvDemandeRetraitComponent implements OnInit {

  public data = [
      {
        "agent": "P Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": 70000,
      },
    {
        "agent": "O Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": 20000,
      },
    {
        "agent": "I Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": 20000,
      },
    {
        "agent": "U Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": 20000,
      },
    {
        "agent": "Y Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": 20000,
      },
    {
        "agent": "T Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": 20000,
      },
    {
        "agent": "R Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": "60000",
      },
    {
        "agent": "E Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": "50000",
      },
    {
        "agent": "Z Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": "900000",
      },
    {
        "agent": "A Wring",
        "telephone": "1234567",
        "adresse": "Pikine Dakar Sénégal",
        "cautionconsomme": "290000",
      },
    
  ];

    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "agent";
    public sortOrder = "asc";

    constructor() { }

  ngOnInit() {
  
  }

  public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.agent.length;
    }


}
