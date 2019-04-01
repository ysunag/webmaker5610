import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../model/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  uid: String;
  website: Website = new Website('', '', '', '');
  websites: Array<Website>;

  errorFlag: boolean;
  errorMsg = 'Invalid website name!';

  constructor(private activateRouter: ActivatedRoute, private websiteService: WebsiteService, private router: Router ) { this.errorFlag = false; }

  CreateWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    if (this.website.name.length < 1) {
      this.errorFlag = true;
    } else {
        return this.websiteService.createWebsite(this.uid, this.website)
          .subscribe((websites: any) => {
            this.websites = websites;
            this.router.navigate(['/user', this.uid, 'website']);
          }, (error) => {
            if (error) {
              this.errorMsg = error;
              console.log(error);
              this.errorFlag = true;
            }
          });
    }
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.websiteService.findWebsitesByUser(params['uid']).subscribe((websites: any) => {
        if (websites) {
          this.websites = websites;
        }
      });
      console.log('user id: ' + this.uid);
    });
  }

}
