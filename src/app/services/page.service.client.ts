import {Injectable} from '@angular/core';
import {Page} from '../model/page.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class PageService {

  constructor(private http: HttpClient) {}

  pages: Page[] = [
    { _id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem' }
  ];


  api = { 'createPage' : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };


  baseUrl = environment.baseUrl;

  createPage(websiteId, page)  {
    // page.websiteId = websiteId;
    // page._id = Math.random().toString(36).substr(2, 9);
    // this.pages.push(page);
    // return page;
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  findPageByWebsiteId(websiteId)  {
    // const res = [];
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x].websiteId === websiteId) {
    //     res.push(this.pages[x]);
    //   }
    // }
    // return res;
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page').pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  findPageById(pageId)  {
    // for (const page of this.pages) {
    //   if (page._id === pageId) {
    //     return page;
    //   }
    // }
    return this.http.get(this.baseUrl + '/api/page/' + pageId).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }
  updatePage(pageId, page)  {
    // for (let i = 0; i < this.pages.length; i++) {
    //   if (this.pages[i]._id === pageId) {
    //     this.pages[i] = page;
    //     return;
    //   }
    // }
    return this.http.put(this.baseUrl + '/api/page/' + pageId, page).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  deletePage(pageId) {
    // for (const i in this.pages) {
    //   if (this.pages[i]._id === pageId) {
    //     const j = +i;
    //     this.pages.splice(j, 1);
    //   }
    // }
    return this.http.delete(this.baseUrl + '/api/page/' + pageId).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }
}
