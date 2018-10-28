import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './component/history/history.component';
import { RoutingModule} from "./module/routing/routing.module";
import {WikipediaComponent} from "./component/wikipedia/wikipedia.component";
import {GiphyComponent} from "./component/giphy/giphy.component";
import { HomeComponent } from './component/home/home.component';
import {FormsModule} from "@angular/forms";
import {GiphyService} from "./service/giphy.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    WikipediaComponent,
    GiphyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
