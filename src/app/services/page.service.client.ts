import {Injectable} from '@angular/core';
import {Page} from '../model/page.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class PageService {

  constructor(private http: HttpClient) {}

  api = { 'createPage' : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };


  baseUrl = environment.baseUrl;

  createPage(websiteId, page)  {
    const newPage = {name: page.name, title: page.title, websiteId: websiteId};
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', newPage).pipe(
      map((response) => {
        return response;
      }));
  }

  findPageByWebsiteId(websiteId)  {
    return this.http.get<Array<Page>>(this.baseUrl + '/api/website/' + websiteId + '/page').pipe(
      map((response) => {
        return response;
      }));
  }

  findPageById(pageId)  {
    return this.http.get<Page>(this.baseUrl + '/api/page/' + pageId).pipe(
      map((response) => {
        return response;
      }));
  }
  updatePage(pageId, page)  {
    return this.http.put(this.baseUrl + '/api/page/' + pageId, page).pipe(
      map((response) => {
        return response;
      }));
  }

  deletePage(pageId) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId).pipe(
      map((response) => {
        return response;
      }));
  }
}
