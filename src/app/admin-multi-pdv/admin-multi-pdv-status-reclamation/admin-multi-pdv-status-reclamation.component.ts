import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-multi-pdv-status-reclamation',
  templateUrl: './admin-multi-pdv-status-reclamation.component.html',
  styleUrls: ['./admin-multi-pdv-status-reclamation.component.css']
})
export class AdminmultipdvStatusReclamationComponent implements OnInit {

  	public data = [
	  	{
		    "datereclamation": "2016-09-02 14:48:34",
		    "pdv": "C Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "reglé",
	  	},
		{
		    "datereclamation": "2017-03-09 14:48:34",
		    "pdv": "L  Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "reglé",
	  	},
		{
		    "datereclamation": "2017-01-09 14:48:34",
		    "pdv": "M Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "EN COURS",
	  	},
		{
		    "datereclamation": "2016-01-01 14:48:34",
		    "pdv": "P Wing",
		    "telephone": "10034567",
		    "adresse": " Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "reglé",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "Wing",
		    "telephone": "1234567",
		    "adresse": "Sénégal",
		    "message": "Blablabla",
		    "etat": "reglé",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "H Wing",
		    "telephone": "1234567",
		    "adresse": " Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "reglé",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "N Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "message": "Blabla",
		    "etat": "EN COURS",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "F Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Sénégal",
		    "message": "Blablabla",
		    "etat": "EN COURS",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "R Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Sénégal",
		    "message": "Blablabla",
		    "etat": "EN COURS",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "B Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Sénégal",
		    "message": "Blablabla",
		    "etat": "EN COURS",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "A Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Sénégal",
		    "message": "Blablabla",
		    "etat": "EN COURS",
	  	},
		{
		    "datereclamation": "2016-01-09 14:48:34",
		    "pdv": "Wing",
		    "telephone": "1234537",
		    "adresse": "Pikine Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "reglé",
	  	},
		{
		    "datereclamation": "2016-01-09 14:40:34",
		    "pdv": "Wing",
		    "telephone": "1234567",
		    "adresse": "Pikine Dakar Sénégal",
		    "message": "Blablabla",
		    "etat": "EN COURS",
	  	},
		
	];

    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "datereclamation";
    public sortOrder = "asc";

    constructor() { }

	ngOnInit() {
	
	}

	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.datereclamation.length;
    }



}
