import { Component } from '@angular/core';
import {AuthService} from "./login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki-giphy-views';

  constructor(private authService : AuthService){}

  logout() {
    this.authService.signOut();
  }
}
