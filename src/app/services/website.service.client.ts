import {Injectable} from '@angular/core';
import {Website} from '../model/website.model.client';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WebsiteService {

  constructor(private http: HttpClient) {}

  websites: Website[] = [

    { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },

    { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },

    { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },

    { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },

    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },

    { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },

    { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }

  ]
  api = { 'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };


  baseUrl = environment.baseUrl;
  createWebsite(userId, website) {
    // website._id = Math.random().toString(36).substr(2, 9);
    // website.developerId = userId;
    // this.websites.push(website);
    // return website;
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  findWebsitesByUser(userId) {
    // const res = [];
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x].developerId === userId) {
    //     res.push(this.websites[x]);
    //   }
    // }
    // return res;
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website').pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  findWebsiteById(websiteId) {
    // for (const website of this.websites) {
    //   if (website._id === websiteId) {
    //     return website;
    //   }
    // }
    return this.http.get(this.baseUrl + '/api/website/' + websiteId).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  updateWebsite(websiteId, website){
    // for (let i = 0; i < this.websites.length; i++) {
    //   if (this.websites[i]._id === websiteId) {
    //     this.websites[i] = website;
    //     return;
    //   }
    // }
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }


  deleteWebsite(websiteId) {
    // for (const i in this.websites) {
    //   if (this.websites[i]._id === websiteId) {
    //     const j = +i;
    //     this.websites.splice(j, 1);
    //   }
    // }
    return this.http.delete(this.baseUrl + '/api/user/' + websiteId).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }
}
