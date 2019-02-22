import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {Page} from '../model/page.model.client';


@Injectable()
export class PageService {

  constructor() {}

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


  createPage(websiteId, page)  {
    page.websiteId = websiteId;
    page._id = Math.random().toString(36).substr(2, 9);
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId)  {
    const res = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        res.push(this.pages[x]);
      }
    }
    return res;
  }

  findPageById(pageId)  {
    for (const page of this.pages) {
      if (page._id === pageId) {
        return page;
      }
    }
  }
  updatePage(pageId, page)  {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages[i] = page;
        return;
      }
    }
  }

  deletePage(pageId) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
