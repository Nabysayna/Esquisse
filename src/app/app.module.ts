/*-----------------*/
/*      Modules     */
/*-----------------*/

import { NgModule }      from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser' ; 
import  { FormsModule} from '@angular/forms' ;
import { HttpModule }    from '@angular/http';
import { LoadersCssModule } from 'angular2-loaders-css';
import { Ng2UploaderModule } from 'ng2-uploader';
import {DataTableModule} from "angular2-datatable";
import { TabsModule, CollapseModule, ProgressbarModule, PopoverModule, ModalModule, TypeaheadModule} from 'ng2-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';


/*-----------------*/
/*      Services   */
/*-----------------*/

import { SoapService } from './soap.service';
import { EnvoicashService, PaiecashService } from './joni-joni-component/joniservices';
import { AchatJulaService} from './postcash/postservices';
import { ReglSenelecService} from './postcash/postservices';
import { AchatCodeWoyofalService} from './postcash/postservices';
import { RechargeVitfeService} from './joni-joni-component/joniservices';
import { RechargeCarteService} from './joni-joni-component/joniservices';
import { RechargeEspeceService} from './postcash/postservices';
import { AchatCreditTelService} from './postcash/postservices';
import { RetraitEspeceService} from './postcash/postservices';
import { SoldeService} from './soldecompte/soldeservice';
import { CashInService} from './expresso/expressoservices';
import { CashOutService} from './expresso/expressoservices';
import { AgentTopUpService} from './expresso/expressoservices';
import { MyAccountService} from './expresso/expressoservices';
import { NAbonnementService} from './tnt/tntservices';
import { LAbonnementService} from './tnt/tntservices';
import { EFinancierService} from './tnt/tntservices';



import { UserPdvService }    from './services/userPdv.service';
import { PostCashService }    from './services/postCash.service';
import { AdminpdvDashboardService }    from './services/adminpdv-dashboard.service';
import { AdminpdvMonitoringService }    from './services/adminpdv-monitoring.service';
import { AuthentificationServiceWeb } from './webServiceClients/Authentification/authentification.service';
import { PostCashServiceWeb } from './webServiceClients/PostcashClient/Postcash.service';
import { PostCashWebService } from './webServiceClients/Postcash/postcash.service';
import { ExpressoCashWebService } from './webServiceClients/ExpressoCash/expressocash.service';
import { JoniJoniWebService } from './webServiceClients/JoniJoni/jonijoni.service';
import { TntServiceWeb } from './webServiceClients/Tnt/Tnt.service';
import { AdminpdvServiceWeb } from './webServiceClients/Adminpdv/adminpdv.service';
import { AdminmultipdvServiceWeb } from './webServiceClients/Adminmultipdv/adminmultipdv.service';
import { EcomServiceWeb } from './webServiceClients/ecom/ecom.service';
import { AuthenticationService }    from './services/authentification.service';
import { CommercialServiceWeb }    from './webServiceClients/Commercial/commercial.service';
import { ComptabiliteServiceWeb } from './webServiceClients/Comptabilite/comptabilite.service';
import {GestionreportingServiceWeb} from './webServiceClients/Gestionreporting/gestionreporting.service';
import {DemandepretServiceWeb} from './webServiceClients/Demandepret/demandepret.service';
import {CrmServiceWeb} from './webServiceClients/Crm/crm.service';


/*-----------------*/
/*      Routes     */
/*-----------------*/

import { Routing }        from './app.routing';
import { AuthGuard } from './_guards/auth.guard';



/*-----------------*/
/*      Components  */
/*-----------------*/

import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';

import { AccueilComponent } from './accueil/accueil.component';
import { AccueiladminpdvComponent } from './accueiladminpdv/accueiladminpdv.component';
import { AccueilAdminMultiPdvComponent } from './accueil-admin-multi-pdv/accueil-admin-multi-pdv.component';
import { AccueilcoursierComponent } from './accueilcoursier/accueilcoursier.component';
import { AccueiladmincoursierComponent } from './accueiladmincoursier/accueiladmincoursier.component';
import { AdmincommercialComponent } from './admincommercial/admincommercial.component';
import { AccueiladmincommercialComponent } from './accueiladmincommercial/accueiladmincommercial.component';
import { AccueilcommercialComponent } from './accueilcommercial/accueilcommercial.component';

import { NavbarTopComponent } from './navbars/navbar-top/navbar-top.component';

import { AdminpdvAidedecisionComponent } from './adminpdv/adminpdv-aidedecision/adminpdv-aidedecision.component';
import { AdminpdvDashboardComponent } from './adminpdv/adminpdv-dashboard/adminpdv-dashboard.component';
import { AdminpdvMonitoringComponent } from './adminpdv/adminpdv-monitoring/adminpdv-monitoring.component';
import { AdminpdvStatusReclamationComponent } from './adminpdv/adminpdv-status-reclamation/adminpdv-status-reclamation.component';
import { AdminpdvparametrecompteComponent } from './adminpdv/adminpdv-parametre-compte/adminpdv-parametre-compte.component';

import { AdminmultipdvDashboardComponent } from './admin-multi-pdv/admin-multi-pdv-dashboard/admin-multi-pdv-dashboard.component';
import { AdminmultipdvDemandeRetraitComponent } from './admin-multi-pdv/admin-multi-pdv-demande-retrait/admin-multi-pdv-demande-retrait.component';
import { AdminmultipdvMonitoringComponent } from './admin-multi-pdv/admin-multi-pdv-monitoring/admin-multi-pdv-monitoring.component';
import { AdminmultipdvStatusPdvComponent } from './admin-multi-pdv/admin-multi-pdv-status-pdv/admin-multi-pdv-status-pdv.component';
import { AdminmultipdvStatusReclamationComponent } from './admin-multi-pdv/admin-multi-pdv-status-reclamation/admin-multi-pdv-status-reclamation.component';
import { AdminmultipdvUpdateCautionComponent } from './admin-multi-pdv/admin-multi-pdv-update-caution/admin-multi-pdv-update-caution.component';

import { AdmincoursierComponent } from './admincoursier/admincoursier.component';

import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';
import { WesternUnionComponentComponent } from './western-union-component/western-union-component.component';
import { MoneyGramComponentComponent } from './money-gram-component/money-gram-component.component';
import { RyaComponentComponent } from './rya-component/rya-component.component';
import { CrmComponent } from './crm/crm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';
import { DemandepretComponent } from './demandepret/demandepret.component';
import { GestionreportingComponent } from './gestionreporting/gestionreporting.component';
import { SoldecompteComponent } from './soldecompte/soldecompte.component';
import { RecusComponent } from './recus/recus.component'; 
import { PostcashComponent } from './postcash/postcash.component';
import { LoaderComponent } from './loader/loader.component';

import { LineChartComponent } from './graphs/line-chart/line-chart.component';
import { BarChartComponent } from './graphs/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './graphs/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './graphs/radar-chart/radar-chart.component';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './graphs/polar-area-chart/polar-area-chart.component';
import { ExpressoComponent } from './expresso/expresso.component';
import { TntComponent, DataToArray } from './tnt/tnt.component';
import { SoapserverComponent } from './soapserver/soapserver.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { EspacePersoComponent } from './espace-perso/espace-perso.component';
import { CommercialComponent } from './commercial/commercial.component';
import { AgentComponent } from './agent/agent.component';
import { RecouvreurComponent } from './recouvreur/recouvreur.component';
import { CoursierComponent } from './coursier/coursier.component';
import { ManagerComponent } from './manager/manager.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';

import { GeomapComponentComponent } from './geomap-component/geomap-component.component';


/*-----------------*/
/*      Pipes      */
/*-----------------*/
import { DatafilterPipe } from './pipes/datafilter.pipe';
import { DecodatafilterPipe } from './pipes/decodatafilter.pipe';
import { CarddatafilterPipe } from './pipes/carddatafilter.pipe';
import { FiltrerecouvrementPipe } from './pipes/filtrerecouvrement.pipe';
import { FiltrerecommandearecupPipe } from './pipes/filtrerecommandearecup.pipe';
import { FiltrerecommandealivrerPipe } from './pipes/filtrerecommandealivrer.pipe';
import { PipeCommandePipe } from './pipes/pipe-commande.pipe';
import { FiltreoperateursPipe } from './pipes/filtreoperateurs.pipe';
import { FiltrervoperateursPipe } from './pipes/filtrervoperateurs.pipe';


import { AdminpdvparametrecomptePipe } from './adminpdv/adminpdv-parametre-compte/adminpdv-parametre-compte.pipe';
import { AdminpdvStatusReclamationPipe } from './adminpdv/adminpdv-status-reclamation/adminpdv-status-reclamation.pipe';

import { AdminmultipdvStatusReclamationPipe } from './admin-multi-pdv/admin-multi-pdv-status-reclamation/admin-multi-pdv-status-reclamation.pipe';
import { AdminmultipdvUpdateCautionPipe } from './admin-multi-pdv/admin-multi-pdv-update-caution/admin-multi-pdv-update-caution.pipe';
import { AdminmultipdvDemandeRetraitPipe } from './admin-multi-pdv/admin-multi-pdv-demande-retrait/admin-multi-pdv-demande-retrait.pipe';

import { FilterAdminmultperformancePipe } from './pipes/filterAdminmultperformance.pipe';
import { FiltredateintervallePipe } from './pipes/filtredateintervalle.pipe';
import { FiltredateparanneePipe } from './pipes/filtredateparannee.pipe';
import { FiltredateparjourPipe } from './pipes/filtredateparjour.pipe';
import { FiltrefichierPipe } from './pipes/filtrefichier.pipe';
import { FiltrervPipe } from './pipes/filtrerv.pipe';
import { FiltrechargesPipe } from './pipes/filtrecharges.pipe';
import { FiltrerevenusPipe } from './pipes/filtrerevenus.pipe';
import { FiltreexploitationPipe } from './pipes/filtreexploitation.pipe';
import { FiltresupservicePipe } from './pipes/filtresupservice.pipe';
import { FiltreportefeuillePipe } from './pipes/filtreportefeuille.pipe';
import { FiltrerelancePipe } from './pipes/filtrerelance.pipe';
import { FiltrepromotionPipe } from './pipes/filtrepromotion.pipe';
import { FiltreprospectionPipe } from './pipes/filtreprospection.pipe';
import { FiltresuivicommandePipe } from './pipes/filtresuivicommande.pipe';
import { FiltregestionreportingPipe } from './pipes/filtregestionreporting.pipe';
import { SelfprovidedfilterPipe } from './pipes/selfprovidedfilter.pipe';
import { ConsulterpretComponent } from './consulterpret/consulterpret.component';
import { SuppliedarticlesPipe } from './pipes/suppliedarticles.pipe';
import { FiltrezonepdrPipe } from './pipes/filtrezonepdr.pipe';
import { FiltresouszonepdrPipe } from './pipes/filtresouszonepdr.pipe';
import { FiltresouszonesupplierPipe } from './pipes/filtresouszonesupplier.pipe';
import { FiltrezonesupplierPipe } from './pipes/filtrezonesupplier.pipe';


/*--------------------------------------------------------------------------------------------------------*/
/*                                            END OF IMPORTS                                              */
/*--------------------------------------------------------------------------------------------------------*/


@NgModule({
  declarations: [
    DataToArray,
    AppComponent,
    AuthComponentComponent,
    AccueilComponent,
    OrangeMoneyComponentComponent,
    TigoCashComponentComponent,
    WesternUnionComponentComponent,
    MoneyGramComponentComponent,
    RyaComponentComponent,
    CrmComponent,
    DashboardComponent,
    ECommerceComponent,
    JoniJoniComponentComponent,
    AccueiladminpdvComponent,
    AccueilAdminMultiPdvComponent,
    DemandepretComponent,
    GestionreportingComponent,
    SoldecompteComponent,
    RecusComponent,
    PostcashComponent,

    AdminmultipdvDashboardComponent,
    AdminmultipdvDemandeRetraitComponent,
    AdminmultipdvMonitoringComponent,
    AdminmultipdvStatusPdvComponent,
    AdminmultipdvStatusReclamationComponent,
    AdminmultipdvUpdateCautionComponent,    

    AdminpdvAidedecisionComponent,
    AdminpdvDashboardComponent,
    AdminpdvMonitoringComponent,
    AdminpdvStatusReclamationComponent,
    AdminpdvparametrecompteComponent,
    
    GeomapComponentComponent,
    LoaderComponent,
    NavbarTopComponent,
    BarChartComponent,
    LineChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DoughnutChartComponent,
    ExpressoComponent,
    TntComponent,
    SoapserverComponent,
    CatalogueComponent,
    EspacePersoComponent,
    LoaderComponent,
    CommercialComponent,
    AgentComponent,
    RecouvreurComponent,
    CoursierComponent,
    ManagerComponent,
    ComptabiliteComponent,
    DatafilterPipe,
    DecodatafilterPipe,
    CarddatafilterPipe,
    FiltrerecouvrementPipe,
    FiltrerecommandearecupPipe,
    FiltrerecommandealivrerPipe,
    AdmincoursierComponent,
    PipeCommandePipe,
    FiltreoperateursPipe,
    FiltrervoperateursPipe,
    FiltredateintervallePipe,
    FiltredateparjourPipe,
    FiltredateparanneePipe,
    FilterAdminmultperformancePipe,

    AdminmultipdvStatusReclamationPipe,
    AdminmultipdvUpdateCautionPipe,
    AdminmultipdvDemandeRetraitPipe,
    
    AdminpdvparametrecomptePipe,
    AdminpdvStatusReclamationPipe,

    AccueilcoursierComponent,
    AccueiladmincoursierComponent,
    AdmincommercialComponent,
    AccueiladmincommercialComponent,
    AccueilcommercialComponent,
    FiltrefichierPipe,
    FiltrervPipe,
    FiltrechargesPipe,
    FiltrerevenusPipe,
    FiltreexploitationPipe,
    FiltresupservicePipe,
    FiltreportefeuillePipe,
    FiltrerelancePipe,
    FiltrepromotionPipe,
    FiltreprospectionPipe,
    FiltresuivicommandePipe,
    FiltregestionreportingPipe,
    SelfprovidedfilterPipe,
    ConsulterpretComponent,
    SuppliedarticlesPipe,
    FiltrezonepdrPipe,
    FiltresouszonepdrPipe,
    FiltresouszonesupplierPipe,
    FiltrezonesupplierPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2UploaderModule,
    Routing,
    DataTableModule,
    ChartsModule,
    LoadersCssModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    TypeaheadModule.forRoot(),
    PopoverModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
    })
  ],
  providers: [  
      SoapService,
      EFinancierService,
      LAbonnementService,
      NAbonnementService,
      MyAccountService,
      AgentTopUpService,
      CashOutService,
      CashInService,
      SoldeService,
      RetraitEspeceService,
      AchatCreditTelService,
      RechargeCarteService,
      RechargeEspeceService,
      RechargeVitfeService,
      AchatCodeWoyofalService,
      ReglSenelecService,
      AchatJulaService,
      EnvoicashService,
      PaiecashService,
      AuthGuard,
      UserPdvService, 
      PostCashService, 
      AdminpdvDashboardService,
      AdminpdvMonitoringService,
      AuthentificationServiceWeb,
      PostCashServiceWeb,
      PostCashWebService,
      ExpressoCashWebService,
      JoniJoniWebService,
      TntServiceWeb,
      EcomServiceWeb,
      AdminpdvServiceWeb,
      AuthenticationService,
      CommercialServiceWeb,
      AdminmultipdvServiceWeb,
      ComptabiliteServiceWeb,
      GestionreportingServiceWeb,
      AuthenticationService,
      CrmServiceWeb,
      DemandepretServiceWeb
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
