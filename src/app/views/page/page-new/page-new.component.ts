import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  errorFlag: boolean;
  errorMsg = 'Invalid page name!';

  constructor(private activeRouter: ActivatedRoute, private pageService: PageService, private router: Router) {
    this.page = new Page('', '',  '', '');
  }

  CreatePage() {
    console.log(this.page.name);
    console.log(this.page.title);
    if (this.page.name.length < 1 ) {
      this.errorFlag = true;
    } else {
      this.activeRouter.params.subscribe(params => {
        return this.pageService.createPage(this.wid, this.page)
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

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      console.log('user id: ' + this.uid);
      console.log('website id: ' + this.wid);
    });
  }

}
