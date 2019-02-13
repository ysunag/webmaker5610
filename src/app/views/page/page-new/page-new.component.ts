import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../page-list/page-list.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  uid: String;
  wid: String;
  page: Page;

  constructor(private router: ActivatedRoute) {
    this.page = new Page('6', '', '');
  }

  CreatePage() {
    console.log(this.page.pageName);
    console.log(this.page.pageTitle);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      console.log('user id: ' + this.uid);
      console.log('website id: ' + this.wid);
    });
  }

}
