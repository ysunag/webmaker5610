import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../model/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  uid: String;
  wid: String;
  page: Page;

  constructor(private router: ActivatedRoute, private pageService: PageService) {
    this.page = new Page('', '',  '', '');
  }

  CreatePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    this.pageService.createPage(this.wid, this.page);
    this.router.params.subscribe(params => {
      return this.pageService.createPage(this.wid, this.page)
        .subscribe((pages: any) => {});
    });
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
