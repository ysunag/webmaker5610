import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../model/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  uid: String;
  wid: String;
  page: Page;

  constructor(private router: ActivatedRoute, private pageService: PageService) {
    this.page = new Page('', '', '', '');
  }

  UpdatePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    this.pageService.updatePage(this.page._id, this.page);
    this.router.params.subscribe(params => {
      return this.pageService.updatePage(this.page._id, this.page)
        .subscribe((pages: any) => {});
    });
  }

  DeletePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    this.pageService.deletePage(this.page._id);
    this.router.params.subscribe(params => {
      return this.pageService.deletePage(this.page._id)
        .subscribe((pages: any) => {});
    });
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pageService.findPageById(params['pid']).subscribe((page: any) => {
        if (page) {
          this.page = page;
        }
      });
      console.log('user id: ' + this.uid);
      console.log('page id: ' + this.page._id);
      console.log('web id: ' + this.wid);
  });
  }

}
