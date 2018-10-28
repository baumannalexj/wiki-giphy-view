import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HistoryComponent} from "../../component/history/history.component";
import {WikipediaComponent} from "../../componenet/wikipedia/wikipedia.component";
import {GiphyComponent} from "../../componenet/giphy/giphy.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent},
  { path: 'wikipedia', component: WikipediaComponent},
  { path: 'giphy', component: GiphyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class RoutingModule { }
