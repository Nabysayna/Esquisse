import { NgModule }      from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser' ; 
import  { FormsModule} from '@angular/forms' ;
import { HttpModule }    from '@angular/http';
import { LoadersCssModule } from 'angular2-loaders-css';



import { EnvoicashService, PaiecashService } from './joni-joni-component/joniservices';
import { AchatJulaService} from './postcash/postservices';
import { ReglSenelecService} from './postcash/postservices';
import { AchatCodeWoyofalService} from './postcash/postservices';
import { HistoriqueOperationsService} from './gestionreporting/gestionservice';
import { ArretCaisseService} from './gestionreporting/gestionservice';
import { DemandePretService} from './demandepret/demandeservice';
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

import { Routing }        from './app.routing';

import { AuthGuard } from './_guards/auth.guard';
import { UserPdvService }    from './services/userPdv.service';
import { PostCashService }    from './services/postCash.service';
import { AdminpdvDashboardService }    from './services/adminpdv-dashboard.service';
import { AdminpdvMonitoringService }    from './services/adminpdv-monitoring.service';
import { SoapService } from './soap.service';
import { AuthentificationServiceWeb } from './webServiceClients/Authentification/authentification.service';
import { PostCashServiceWeb } from './webServiceClients/PostcashClient/Postcash.service';
import { TntServiceWeb } from './webServiceClients/Tnt/Tnt.service';
import { AuthenticationService }    from './services/authentification.service';

import { NavbarTopComponent } from './navbars/navbar-top/navbar-top.component';

import { AdminpdvAidedecisionComponent } from './adminpdv/adminpdv-aidedecision/adminpdv-aidedecision.component';
import { AdminpdvParametrageComponent } from './adminpdv/adminpdv-parametrage/adminpdv-parametrage.component';
import { AdminpdvDashboardComponent } from './adminpdv/adminpdv-dashboard/adminpdv-dashboard.component';
import { AdminpdvMonitoringComponent } from './adminpdv/adminpdv-monitoring/adminpdv-monitoring.component';

import { FormChangerAccessUserComponent } from './forms/form-changer-access-user/form-changer-access-user.component';
import { TableCompteAccessComponent } from './tables/table-compte-access/table-compte-access.component';

import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';
import { WesternUnionComponentComponent } from './western-union-component/western-union-component.component';
import { MoneyGramComponentComponent } from './money-gram-component/money-gram-component.component';
import { RyaComponentComponent } from './rya-component/rya-component.component';
import { CrmComponent } from './crm/crm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';
import { AccueiladminpdvComponent } from './accueiladminpdv/accueiladminpdv.component';
import { AccueilAdminMultiPdvComponent } from './accueil-admin-multi-pdv/accueil-admin-multi-pdv.component';
import { DemandepretComponent } from './demandepret/demandepret.component';
import { GestionreportingComponent } from './gestionreporting/gestionreporting.component';
import { SoldecompteComponent } from './soldecompte/soldecompte.component';
import { RecusComponent } from './recus/recus.component'; 
import { PostcashComponent } from './postcash/postcash.component';
import { LoaderComponent } from './loader/loader.component';

import { TabsModule, CollapseModule, ProgressbarModule} from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts';
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

    LoaderComponent,
    NavbarTopComponent,
    AdminpdvAidedecisionComponent,
    AdminpdvParametrageComponent,
    AdminpdvDashboardComponent,
    AdminpdvMonitoringComponent,
    FormChangerAccessUserComponent,
    TableCompteAccessComponent,
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
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ChartsModule,
    LoadersCssModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [
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
      DemandePretService,
      ArretCaisseService,
      HistoriqueOperationsService,
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
      SoapService,
      AuthentificationServiceWeb,
      PostCashServiceWeb,
      TntServiceWeb,
      AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
