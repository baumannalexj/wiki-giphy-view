import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HistoryComponent} from "../../component/history/history.component";
import {WikipediaComponent} from "../../component/wikipedia/wikipedia.component";
import {GiphyComponent} from "../../component/giphy/giphy.component";
import {HomeComponent} from "../../component/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
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
