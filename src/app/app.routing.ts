import { NgModule }      from '@angular/core' ;

import  { RouterModule, Routes} from '@angular/router' ;

import { AuthGuard } from './_guards/auth.guard';

import { AdminpdvAidedecisionComponent } from './adminpdv/adminpdv-aidedecision/adminpdv-aidedecision.component';
import { AdminpdvParametrageComponent } from './adminpdv/adminpdv-parametrage/adminpdv-parametrage.component';
import { AdminpdvDashboardComponent } from './adminpdv/adminpdv-dashboard/adminpdv-dashboard.component';
import { AdminpdvMonitoringComponent } from './adminpdv/adminpdv-monitoring/adminpdv-monitoring.component';

import { FormChangerAccessUserComponent } from './forms/form-changer-access-user/form-changer-access-user.component';

import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component'; 
import { AccueiladminpdvComponent } from './accueiladminpdv/accueiladminpdv.component';
import { AccueilAdminMultiPdvComponent } from './accueil-admin-multi-pdv/accueil-admin-multi-pdv.component';
import { RyaComponentComponent } from './rya-component/rya-component.component';
import { MoneyGramComponentComponent } from './money-gram-component/money-gram-component.component';
import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { PostcashComponent } from './postcash/postcash.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';
import { WesternUnionComponentComponent } from './western-union-component/western-union-component.component';
import { CrmComponent } from './crm/crm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';
import { DemandepretComponent } from './demandepret/demandepret.component';
import { GestionreportingComponent } from './gestionreporting/gestionreporting.component';
import { SoldecompteComponent } from './soldecompte/soldecompte.component';
import { RecusComponent } from './recus/recus.component';
import { ExpressoComponent } from './expresso/expresso.component';
import { TntComponent } from './tnt/tnt.component';
import { SoapserverComponent } from './soapserver/soapserver.component';



const appRoutes: Routes = [
    { path: '', component: AuthComponentComponent },
    { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard], 
           children:[
    			{path: 'RIA', component: SoapserverComponent},
    			{path: 'MONEYGRAM', component: MoneyGramComponentComponent},
    			{path: 'ORANGE MONEY', component: OrangeMoneyComponentComponent},
    			{path: 'POSTECASH', component: PostcashComponent},
    			{path: 'TIGO CASH', component: TigoCashComponentComponent},
    			{path: 'WESTERN UNION', component: WesternUnionComponentComponent},
                {path: 'CRM', component: CrmComponent},
                {path: 'DASHBOARD', component: DashboardComponent},
                {path: 'E-COMMERCE', component: ECommerceComponent},
                {path: 'JONI JONI', component: JoniJoniComponentComponent},
               {path: 'DEMANDEPRET', component: DemandepretComponent},
               {path: 'GESTIONREPORTING', component: GestionreportingComponent},
                {path: 'EXPRESSO', component: ExpressoComponent},
                 {path: 'TNT BY BBS INVEST', component: TntComponent},
                 {path: 'SOLDE DU COMPTE', component: SoldecompteComponent},
               {path: 'RECUS/:id', component: RecusComponent}


    		] 
    },
    { path: 'accueiladmpdv', component: AccueiladminpdvComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'dashboard', component: AdminpdvDashboardComponent },
                    { path: 'monitoring', component: AdminpdvMonitoringComponent },
                    { path: 'parametrage', component: AdminpdvParametrageComponent },
                    { path: 'aidedecision', component: AdminpdvAidedecisionComponent },
                    { path: 'changer-acces-pdv/:id', component: FormChangerAccessUserComponent },
                    { path: '', component: AdminpdvDashboardComponent }
                ]
            }
        ]
    },
    { path: 'accueiladmmpdv', component: AccueilAdminMultiPdvComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
