import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {Website} from '../model/website.model.client';

@Injectable()
export class WebsiteService {

  constructor() {}

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


  createWebsite(userId, website) {
    website._id = Math.random().toString(36).substr(2, 9);
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId) {
    const res = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        res.push(this.websites[x]);
      }
    }
    return res;
  }

  findWebsiteById(websiteId) {
    for (const website of this.websites) {
      if (website._id === websiteId) {
        return website;
      }
    }
  }
  updateWebsite(websiteId, website){
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i] = website;
        return;
      }
    }
  }


  deleteWebsite(websiteId) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
      }
    }
  }
}
