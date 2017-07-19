import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';

import { AdminpdvServiceWeb } from '../../webServiceClients/Adminpdv/adminpdv.service';


@Component({
  selector: 'app-adminpdv-parametre-compte',
  templateUrl: './adminpdv-parametre-compte.component.html',
  styleUrls: ['./adminpdv-parametre-compte.component.css']
})
export class AdminpdvparametrecompteComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

	public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "pdv";
  public sortOrder = "desc";

  public monitoringAdminpdvUserpdv: any;
  public modifuserpdv: any;
  public password:string;
  public confirmPassword:string;
  public errorConfirm:boolean = false;
  loading = false ;

  constructor(private adminpdvServiceWeb: AdminpdvServiceWeb) { }

  ngOnInit() {
    this.loading = true ;

    this.adminpdvServiceWeb.listuserpdv('azrrtt').then(adminpdvServiceWebList => {
      console.log(adminpdvServiceWebList);
      this.monitoringAdminpdvUserpdv = adminpdvServiceWebList;
      this.loading = false ;
    });

  }

  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
  
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.pdv.length;
  }

  public modif(item):void {
    this.modifuserpdv = item;
    console.log(this.modifuserpdv);
  }

  public validermodif():void {
    console.log(this.password +" "+ this.confirmPassword);
    if(this.password == this.confirmPassword) {
      this.adminpdvServiceWeb.modifypdv('token', this.modifuserpdv.idpdv, this.password).then(adminpdvServiceWebList => {
        console.log(adminpdvServiceWebList);
      });
      this.password= null;
      this.confirmPassword = null;
      this.closeBtn.nativeElement.click();  
    }
    else{
      this.errorConfirm = true;
    }
    
  }

  public deconnectionsession(pdv):void {
    console.log(pdv);
    this.adminpdvServiceWeb.deconnectpdv('sfsdf', pdv.idpdv).then(adminpdvServiceWebList => {
      console.log(adminpdvServiceWebList);
    });
  }

}