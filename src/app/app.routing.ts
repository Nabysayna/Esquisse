import { Routes, RouterModule } from '@angular/router';

import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component'; 
import { RyaComponentComponent } from './rya-component/rya-component.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';
import { MoneyGramComponentComponent } from './money-gram-component/money-gram-component.component';
import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { PostCashComponentComponent } from './post-cash-component/post-cash-component.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';
import { WesternUnionComponentComponent } from './western-union-component/western-union-component.component';

const appRoutes: Routes = [
    { path: '', component: AuthComponentComponent },
    { path: 'accueil', component: AccueilComponent, 
    children:[
    			{path: 'RYA', component: RyaComponentComponent},
    			{path: 'JONI JONI', component: JoniJoniComponentComponent},
    			{path: 'MONEYGRAM', component: MoneyGramComponentComponent},
    			{path: 'ORANGE MONEY', component: OrangeMoneyComponentComponent},
    			{path: 'POSTECASH', component: PostCashComponentComponent},    			
    			{path: 'TIGO CASH', component: TigoCashComponentComponent},
    			{path: 'WESTERN UNION', component: WesternUnionComponentComponent},

    		] 
    },

    { path: 'accueil', component: AccueilComponent },
    { path: 'accueil', component: AccueilComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);