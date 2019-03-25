import {Injectable} from '@angular/core';
import {Website} from '../model/website.model.client';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WebsiteService {


  constructor(private http: HttpClient) {}

  api = { 'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };


  baseUrl = environment.baseUrl;
  createWebsite(userId, website) {
    const newWebsite = {name: website.name, description: website.description, developerId: userId};
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', newWebsite).pipe(
      map((response) => {
        return response;
      }));
  }

  findWebsitesByUser(userId) {
    return this.http.get<Array<Website>>(this.baseUrl + '/api/user/' + userId + '/website').pipe(
      map((response) => {
        return response;
      }));
  }

  findWebsiteById(websiteId) {
    return this.http.get<Website>(this.baseUrl + '/api/website/' + websiteId).pipe(
      map((response) => {
        return response;
      }));
  }

  updateWebsite(websiteId, website) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website).pipe(
      map((response) => {
        return response;
      }));
  }


  deleteWebsite(websiteId) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId).pipe(
      map((response) => {
        return response;
      }));
  }

}
