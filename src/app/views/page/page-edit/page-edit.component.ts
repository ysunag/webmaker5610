import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  errorFlag: boolean;
  errorMsg = 'Invalid page name!';


  constructor(private activeRouter: ActivatedRoute, private pageService: PageService, private router: Router) {
    this.page = new Page('', '', '', '');
  }

  UpdatePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    if (this.page.name.length < 1 ) {
      this.errorFlag = true;
    } else {
      this.activeRouter.params.subscribe(params => {
        return this.pageService.updatePage(this.page._id, this.page)
          .subscribe((pages: any) => {
              this.router.navigate(['/user', this.uid, 'website', this.wid, 'page']);
            },
            (error) => {
              if (error) {
                this.errorMsg = error;
                console.log(error);
                this.errorFlag = true;
              }
            });
      });
    }
  }

  DeletePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    this.pageService.deletePage(this.page._id);
    this.activeRouter.params.subscribe(params => {
      return this.pageService.deletePage(this.page._id)
        .subscribe((pages: any) => {});
    });
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
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
