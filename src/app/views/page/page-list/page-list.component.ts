import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


export class Page {
  _id: String;
  pageName: String;
  pageTitle: String;


  constructor(_id, pageName, pageTitle) {
    this._id = _id;
    this.pageName = pageName;
    this.pageTitle = pageTitle;
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
  pageList: Array<Page>;

  constructor(private router: ActivatedRoute) {
    this.pageList = [new Page(1, 'Blog Post', 'Blog Post'), new Page(2, 'Blogs', 'Blogs'),
      new Page(3, 'Home', 'Home'), new Page(4, 'About', 'About'),
      new Page(5, 'Contact Us', 'Contact Us')];
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
    });
  }

}
