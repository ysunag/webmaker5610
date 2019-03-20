import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FlickrService {

  constructor(private http: HttpClient) {}

  api = { 'searchPhotos' : this.searchPhotos,
  };



  key = 'ce732fc28bcf40025297ccc22b4a324d';
  secret = '2b32279a76c53c89';
  flickerUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT' +
    '&format=json&nojsoncallback=1';

  searchPhotos(searchTerm: any) {
    const url = this.flickerUrl
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }



}
