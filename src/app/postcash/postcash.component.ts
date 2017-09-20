import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PostCashWebService } from '../webServiceClients/Postcash/postcash.service';


@Component({
  selector: 'app-postcash',
  templateUrl: './postcash.component.html',
  styleUrls: ['./postcash.component.css'],
  providers: [PostCashWebService]
})
export class PostcashComponent implements OnInit {
    formvisible='';

    telephone:number;
    tel:number;
    telephone_benef:number;
    tel_exp: number;
    tel_rec: number;
    tel_dest: number;
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
    nom_exp: string;
    nom_dest: string;
    nom: string;
    prenom_exp: string;
    prenom_dest: string;
    prenom: string;
    cni_exp: string;
    cni_rec: string;
    typecni_exp: string;
    type_piece_exp: string;
    type_piece_rec: string;
    pays_dest: string;
    pays_exp: string;
    pays_rec: string;
    pays: string;
    prenom_rec: string;
    nom_rec: string;
    code: string;
    frais: string;
    rcv_address: string;
    transaction_reason: string;
    incoming_source: string;
    adresse_dest: string;

    dataImpression:any;


    constructor(
     private route:ActivatedRoute,
     private router: Router,
     private postcashwebservice: PostCashWebService
    ) { }

    ngOnInit():void {
    }

    validrechargementespece(){
      console.log(this.telephone+'-'+this.montant);
      this.postcashwebservice.rechargementespece('00221'+this.telephone+'',''+this.montant).then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'rechargementespece',
            infotransaction:{
              client:{
                telephone:'00221'+this.telephone,
                montant:this.montant,
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validateretraitespece(){
      console.log(this.codevalidation+'-'+this.telephone+'-'+this.montant);
      this.postcashwebservice.retraitespece(this.codevalidation+'','+221'+this.telephone+'',''+this.montant).then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'retraitespece',
            infotransaction:{
              client:{
                telephone:'+221'+this.telephone,
                montant:this.montant,              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });

    }

    validateachatcodewoyofal(){
      console.log(this.montant+'-'+this.compteur);
      this.postcashwebservice.achatcodewoyofal(this.montant+'',this.compteur+'').then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'achatcodewayafal',
            infotransaction:{
              client:{
                transactionPostCash: postcashwebserviceList.transactionId,
                transactionBBS: 'Id BBS',
                codewoyafal: postcashwebserviceList.code,
                montant: this.montant,
                compteur: this.compteur,
              },
            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validatereglementsenelec(){
      console.log(this.police+'-'+this.num_facture);
      this.postcashwebservice.reglementsenelec(this.police+'',this.num_facture).then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'reglementsenelec',
            infotransaction:{
              client:{
                police: this.police,
                facture: this.num_facture,
                montant: 'test montant',

              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });

    }

    validateachatjula(){
      console.log(this.mt_carte+'-'+this.nb_carte);
      this.postcashwebservice.achatjula(this.mt_carte+'',this.nb_carte+'').then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'achatjula',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validachatcredittelephonique(){
      console.log(this.telephone+'-'+this.montant);
      this.postcashwebservice.achatcredittelephonique(this.telephone+'',this.montant+'').then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'achatcredittelephonique',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validateachatneo(){
      console.log(this.produit+'-'+this.montant+'-'+this.type);
      this.postcashwebservice.achatneo(this.produit+'',this.montant+'',this.type+'').then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'achatneo',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validatecashtocashsend(){
      console.log(this.tel_exp+'-'+this.nom_exp+'-'+this.prenom_exp+'-'+this.cni_exp+'-'+this.type_piece_exp+'-'+this.pays_exp+'-'+this.tel_rec+'-'+this.prenom_rec+'-'+this.nom_rec+'-'+this.montant);
      this.postcashwebservice.cashtocashsend(this.tel_exp+'',this.nom_exp,this.prenom_exp,this.cni_exp,this.type_piece_exp,this.pays_exp,this.tel_rec+'',this.prenom_rec,this.nom_rec,this.montant+'').then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'cashtocashsend',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validatecashtocashreceive(){
      console.log(this.tel_rec+'-'+this.cni_rec+'-'+this.type_piece_rec+'-'+this.pays_rec+'-'+this.code+'-'+this.montant);
      this.postcashwebservice.cashtocashreceive(this.tel_rec+'',this.cni_rec,this.type_piece_rec,this.pays_rec+'',this.code,this.montant+'').then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'cashtocashreceive',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }

    validatetransfertverstamtam(){
      console.log(this.tel+'-'+this.montant+'-'+this.frais+'-'+this.nom+'-'+this.prenom+'-'+this.telephone_benef+'-'+this.code+'-'+this.pays+'-'+this.rcv_address+'-'+this.transaction_reason+'-'+this.incoming_source);
      this.postcashwebservice.transfertverstamtam(this.tel+'',this.montant+'',this.frais,this.nom,this.prenom,this.telephone_benef+'',this.code,this.pays,this.rcv_address,this.transaction_reason,this.incoming_source).then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'transfertverstamtam',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });

    }

    validatetransfertverstamtamviaapay(){
      console.log(this.prenom_exp+'-'+this.nom_exp+'-'+this.typecni_exp+'-'+this.cni_exp+'-'+this.tel_exp+'-'+this.montant+'-'+this.frais+'-'+this.nom_dest+'-'+this.prenom_dest+'-'+this.tel_dest+'-'+this.pays_dest+'-'+this.adresse_dest);
      this.postcashwebservice.transfertverstamtamviaapay(this.prenom_exp+'',this.nom_exp+'',this.typecni_exp,this.cni_exp,this.tel_exp+'',this.montant+'',this.frais,this.nom_dest,this.prenom_dest,this.tel_dest+'',this.pays_dest,this.adresse_dest).then(postcashwebserviceList => {
        if(postcashwebserviceList.errorCode == "0" && postcashwebserviceList.errorMessage == ""){
          this.dataImpression = {
            apiservice:'postecash',
            service:'transfertverstamtamviaapay',
            infotransaction:{
              client:{
                prenom:'test',
              },

            },
          }
          sessionStorage.setItem('dataImpression', JSON.stringify(this.dataImpression));
          this.router.navigate(['accueil/impression']);
        }
        console.log(postcashwebserviceList);
      });
    }


}
