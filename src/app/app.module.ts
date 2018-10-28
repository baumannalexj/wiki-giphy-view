import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './component/history/history.component';
import { RoutingModule} from "./module/routing/routing.module";
import { WikipediaComponent } from './componenet/wikipedia/wikipedia.component';
import { GiphyComponent } from './componenet/giphy/giphy.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    WikipediaComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
