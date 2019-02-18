import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';


export class Page {
  _id: String;
  name: String;
  title: String;
  websiteId: String;


  constructor(_id, pageName, pageTitle, websiteId) {
    this._id = _id;
    this.name = pageName;
    this.title = pageTitle;
    this.websiteId = websiteId;
  }

}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  uid: String;
  wid: String;
  pages: Array<Page>;

  constructor(private router: ActivatedRoute, private pageService: PageService) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pages = this.pageService.findPageByWebsiteId(params['wid']);
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
    });
  }

}
