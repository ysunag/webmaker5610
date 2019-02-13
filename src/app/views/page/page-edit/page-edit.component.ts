import { Component, OnInit } from '@angular/core';
import {Website} from '../../website/website-list/website-list.component';
import {Page} from '../page-list/page-list.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  page: Page;

  constructor(private router: ActivatedRoute) {
    this.page = new Page(5, 'Contact Us', 'Contact Us');
  }

  UpdatePage() {
    console.log(this.page.pageName);
    console.log(this.page.pageTitle);
  }

  DeletePage() {
    console.log(this.page.pageName);
    console.log(this.page.pageTitle);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.page._id = params['pid'];
      console.log('user id: ' + this.uid);
      console.log('page id: ' + this.pid);
      console.log('web id: ' + this.wid);
  });
  }

}
