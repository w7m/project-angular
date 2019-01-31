import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import {AuthService} from './services/AuthService';

const appRoutes: Routes = [
  {path: 'appareilss', component: AppareilViewComponent},
  {path: 'appareilss/:id', component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent}
];

@NgModule({

  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
