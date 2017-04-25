
import  { RouterModule, Routes} from '@angular/router' ;

import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component'; 
import { AccueiladminpdvComponent } from './accueiladminpdv/accueiladminpdv.component';
import { AccueilAdminMultiPdvComponent } from './accueil-admin-multi-pdv/accueil-admin-multi-pdv.component';
import { RyaComponentComponent } from './rya-component/rya-component.component';
import { MoneyGramComponentComponent } from './money-gram-component/money-gram-component.component';
import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { PostCashComponentComponent } from './post-cash-component/post-cash-component.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';
import { WesternUnionComponentComponent } from './western-union-component/western-union-component.component';
import { CrmComponent } from './crm/crm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';

const appRoutes: Routes = [
    { path: '', component: AuthComponentComponent },
    { path: 'accueil', component: AccueilComponent, 
           children:[
    			{path: 'RIA', component: RyaComponentComponent},
    			{path: 'MONEYGRAM', component: MoneyGramComponentComponent},
    			{path: 'ORANGE MONEY', component: OrangeMoneyComponentComponent},
    			{path: 'POSTECASH', component: PostCashComponentComponent},    			
    			{path: 'TIGO CASH', component: TigoCashComponentComponent},
    			{path: 'WESTERN UNION', component: WesternUnionComponentComponent},
                {path: 'CRM', component: CrmComponent},
                {path: 'DASHBOARD', component: DashboardComponent},
                {path: 'E-COMMERCE', component: ECommerceComponent},
                {path: 'JONI JONI', component: JoniJoniComponentComponent}

    		] 
    },

    { path: 'accueiladmpdv', component: AccueiladminpdvComponent },
    { path: 'accueiladmmpdv', component: AccueilAdminMultiPdvComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
