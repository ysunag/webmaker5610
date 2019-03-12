import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../model/page.model.client';




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
      this.pageService.findPageByWebsiteId(params['wid']).subscribe((pages: any) => {
        if (pages) {
          this.pages = pages;
        }
      });
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
    });
  }

}
