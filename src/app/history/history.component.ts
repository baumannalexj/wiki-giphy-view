import {Component, OnInit} from '@angular/core';
import {HistoryService} from "./history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['../app.component.css', './history.component.css']
})
export class HistoryComponent implements OnInit {

  searchHistory: any[];

  constructor(historyService: HistoryService) {


    historyService
      .getSearchHistory()
      .subscribe(history => {
        debugger;
        console.log(history);

        let historyAsArray = [];

        history.forEach((timestampAsKey) => {

          let epochTimeMillis = Object.keys(timestampAsKey);
          let dateTime = new Date(epochTimeMillis*1000);
          const searchText = Object.values(timestampAsKey);
          historyAsArray.push(dateTime + ": " + searchText);
        });

        this.searchHistory = historyAsArray;
      });

  }

  ngOnInit() {
  }

}
