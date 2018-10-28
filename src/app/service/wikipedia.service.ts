import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) {
  }

  searchWikipedia(queryText: string) {
    var queryUrl =
      "https://en.wikipedia.org/w/api.php" +
      "?action=query" +
      "&format=json" +
      "&list=search" +
      "&origin=*" +
      `&srsearch=${queryText}`;



    let options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    };

    return this.httpClient.get(queryUrl, options)
  }

}
