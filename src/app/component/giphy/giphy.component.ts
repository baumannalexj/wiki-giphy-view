import {Component, OnInit} from '@angular/core';
import {GiphyService} from '../../service/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  giphyResultTest: any;

  constructor(private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.getGiphyFromSearch("dog");
  }

  getGiphyFromSearch(queryText: string) {

    this.giphyService
      .searchGiphy(queryText)
      .subscribe((response: any) => {

        var firstDownsizedResult =
          response.data[0].images.downsized;


        debugger;
          console.log(response);
          this.giphyResultTest = firstDownsizedResult.url;
        }
      )
    ;
  }
}
