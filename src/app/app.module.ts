import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing }        from './app.routing';

import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PostCashComponentComponent } from './post-cash-component/post-cash-component.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';
import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    AccueilComponent,
    PostCashComponentComponent,
    JoniJoniComponentComponent,
    OrangeMoneyComponentComponent,
    TigoCashComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
