import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostCashWebService } from '../webServiceClients/Postcash/postcash.service';


@Component({
  selector: 'app-postcash',
  templateUrl: './postcash.component.html',
  styleUrls: ['./postcash.component.css']
})
export class PostcashComponent implements OnInit {
    formvisible='';

    telephone:number;
    montant:number;
    compteur:string;
    codevalidation:string;
    mt_carte:number;
    nb_carte:number;
    numeroarecharger:number;
    num_facture: string;
    police: string;
    produit: string;
    type: string;
    tel_exp: string;
    nom_exp: string;
    prenom_exp: string;
    cni_exp: string;
    type_piece_exp: string;
    pays_exp: string;
    tel_rec: string;
    prenom_rec: string;
    nom_rec: string;


    constructor( 
     private route:ActivatedRoute,
     private router: Router,
     private postcashwebservice: PostCashWebService
    ) { }

  ngOnInit():void { }

    validrechargementespece(){
      console.log(this.telephone+'-'+this.montant);
      this.postcashwebservice.rechargementespece(this.telephone+'',''+this.montant).then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validateretraitespece(){
      console.log(this.codevalidation+'-'+this.telephone+'-'+this.montant);
      this.postcashwebservice.retraitespece(this.codevalidation+'',this.telephone+'',''+this.montant).then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validateachatcodewoyofal(){
      console.log(this.montant+'-'+this.compteur);
      this.postcashwebservice.achatcodewoyofal(this.montant+'',this.compteur+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validatereglementsenelec(){
      console.log(this.police+'-'+this.num_facture);
      this.postcashwebservice.reglementsenelec(this.police+'',this.num_facture).then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validateachatjula(){
      console.log(this.mt_carte+'-'+this.nb_carte);
      this.postcashwebservice.achatjula(this.mt_carte+'',this.nb_carte+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response);
      });
    }

    validachatcredittelephonique(){
      console.log(this.telephone+'-'+this.montant);
      this.postcashwebservice.achatcredittelephonique(this.telephone+'',this.montant+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response); 
      });
    }

    validateachatneo(){
      console.log(this.produit+'-'+this.montant+'-'+this.type);
      this.postcashwebservice.achatneo(this.produit+'',this.montant+'',this.type+'').then(postcashwebserviceList => {
        if(JSON.parse(postcashwebserviceList).response == "ok"){
          this.router.navigate(['accueil/RECUS','aj']);
        }
        console.log(JSON.parse(postcashwebserviceList).response); 
      });
    }

    validatecashtocashsend(){
      console.log(this.tel_exp+'-'+this.nom_exp+'-'+this.prenom_exp+'-'+this.cni_exp+'-'+this.type_piece_exp+'-'+this.pays_exp+'-'+this.tel_rec+'-'+this.prenom_rec+'-'+this.nom_rec+'-'+this.montant);
      // this.postcashwebservice.cashtocashsend(this.tel_exp+'',this.nom_exp+'',this.prenom_exp+''this.cni_exp+'',this.type_piece_exp+''this.pays_exp+'',this.tel_rec+''this.prenom_rec+'',this.nom_rec+''this.montant).then(postcashwebserviceList => {
      //   if(JSON.parse(postcashwebserviceList).response == "ok"){
      //     this.router.navigate(['accueil/RECUS','aj']);
      //   }
      //   console.log(JSON.parse(postcashwebserviceList).response); 
      // });
    }





}
