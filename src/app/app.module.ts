import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutingModule} from "./module/routing/routing.module";
import {WikipediaComponent} from "./component/wikipedia/wikipedia.component";
import {GiphyComponent} from "./component/giphy/giphy.component";
import {HomeComponent} from './component/home/home.component';
import {FormsModule} from "@angular/forms";
import {GiphyService} from "./service/giphy.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./login/auth.guard";
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from "./login/login.component";
import {environment} from '../environments/environment';
import {AuthService} from "./login/auth.service";
import {HistoryComponent} from "./history/history.component";

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    WikipediaComponent,
    GiphyComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    GiphyService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
