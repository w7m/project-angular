import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/AuthGuard';
import {EditAppareilComponent} from './edit-appareil/edit-appareil.component';
import {UserListComponent} from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
    {path: 'appareilss', canActivate: [AuthGuard], component: AppareilViewComponent},
    {path: 'edit-appareilss', canActivate: [AuthGuard], component: EditAppareilComponent},
    {path: 'appareilss/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'users', component: UserListComponent},
    {path: 'add-user', component: NewUserComponent},
    {path: '', component: AppareilViewComponent},
    {path: 'not-found', component: FourOhFourComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({

    declarations: [
        AppComponent,
        MonPremierComponent,
        AppareilComponent,
        AuthComponent,
        AppareilViewComponent,
        SingleAppareilComponent,
        FourOhFourComponent,
        EditAppareilComponent,
        UserListComponent,
        NewUserComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [
        AppareilService,
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}
