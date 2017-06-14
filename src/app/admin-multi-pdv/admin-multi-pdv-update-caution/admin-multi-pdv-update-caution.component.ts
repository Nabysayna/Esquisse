import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-multi-pdv-update-caution',
  templateUrl: './admin-multi-pdv-update-caution.component.html',
  styleUrls: ['./admin-multi-pdv-update-caution.component.css']
})
export class AdminmultipdvUpdateCautionComponent implements OnInit {

public data = [
	  	{
		    "agent": "P Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": 100000,
		    "cautionconsomme": 70000,
	  	},
		{
		    "agent": "O Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": 200000,
		    "cautionconsomme": 20000,
	  	},
		{
		    "agent": "I Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": 300000,
		    "cautionconsomme": 20000,
	  	},
		{
		    "agent": "U Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": 500000,
		    "cautionconsomme": 20000,
	  	},
		{
		    "agent": "Y Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": 600000,
		    "cautionconsomme": 20000,
	  	},
		{
		    "agent": "T Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": 600000,
		    "cautionconsomme": 20000,
	  	},
		{
		    "agent": "R Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": "700000",
		    "cautionconsomme": "60000",
	  	},
		{
		    "agent": "E Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": "900000",
		    "cautionconsomme": "50000",
	  	},
		{
		    "agent": "Z Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": "1000000",
		    "cautionconsomme": "900000",
	  	},
		{
		    "agent": "A Wring",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "cautioninitial": "9300000",
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