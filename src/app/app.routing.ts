import { Routes, RouterModule } from '@angular/router';

import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RyaComponentComponent } from './rya-component/rya-component.component';

const appRoutes: Routes = [
    { path: '', component: AuthComponentComponent },
    { path: 'accueil', component: AccueilComponent, 
    children:[{path: 'rya', component: RyaComponentComponent}] 
    },

    { path: 'accueil', component: AccueilComponent },
    { path: 'accueil', component: AccueilComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);