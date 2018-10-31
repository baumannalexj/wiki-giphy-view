import {Injectable} from '@angular/core';
import {AuthService} from "../login/auth.service";
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private searchHistoryRef: any;
  private CURRENT_SESSION_HISTORY_PATH: string;

  constructor(private authService: AuthService,
              private db: AngularFireDatabase) {

    this.CURRENT_SESSION_HISTORY_PATH = `currentSession/${this.authService.userUid}/searches`;

    console.log(this.CURRENT_SESSION_HISTORY_PATH);

    this.searchHistoryRef =
      this.db.list(this.CURRENT_SESSION_HISTORY_PATH);
  }

  getSearchHistory() {
    debugger;
    return this.searchHistoryRef.valueChanges();
  }

  addSearchHistory(searchTerm) {

    debugger;


    this.db
      .object(this.CURRENT_SESSION_HISTORY_PATH)
      .update({
        [Date.now()]: {
          [Date.now()]: searchTerm
        }
      });
  }
}
