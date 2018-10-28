import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './component/history/history.component';
import { RoutingModule} from "./module/routing/routing.module";
import {WikipediaComponent} from "./component/wikipedia/wikipedia.component";
import {GiphyComponent} from "./component/giphy/giphy.component";
import { HomeComponent } from './component/home/home.component';

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
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
