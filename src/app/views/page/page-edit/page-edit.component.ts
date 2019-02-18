import { Component, OnInit } from '@angular/core';
import {Page} from '../page-list/page-list.component';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  uid: String;
  wid: String;
  page: Page;

  constructor(private router: ActivatedRoute, private pageService: PageService) {}

  UpdatePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    this.pageService.updatePage(this.page._id, this.page);
  }

  DeletePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    this.pageService.deletePage(this.page._id);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.page = this.pageService.findPageById(params['pid']);
      console.log('user id: ' + this.uid);
      console.log('page id: ' + this.page._id);
      console.log('web id: ' + this.wid);
  });
  }

}
