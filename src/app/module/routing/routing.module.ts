import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {WikipediaComponent} from "../../component/wikipedia/wikipedia.component";
import {GiphyComponent} from "../../component/giphy/giphy.component";
import {HomeComponent} from "../../component/home/home.component";
import {LoginComponent} from '../../login/login.component';
import {HistoryComponent} from "../../history/history.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
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
