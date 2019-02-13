import { Component, OnInit } from '@angular/core';
import {Page} from '../../page/page-list/page-list.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  uid: String;
  wid: String;
  pid: Page;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
      console.log('page id: ' + this.pid);
    });
  }

}
