import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../model/website.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  uid: String;
  website: Website;
  websites: Array<Website>;

  errorFlag: boolean;
  errorMsg = 'Invalid website name!';

  constructor(private activeRouter: ActivatedRoute, private websiteService: WebsiteService, private router: Router, private sharedService: SharedService) {
    this.website = new Website('', '', '', '');
    this.errorFlag = false;
  }

  UpdateWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    if (this.website.name.length < 1 ) {
      this.errorFlag = true;
    } else {
        return this.websiteService.updateWebsite(this.website._id, this.website)
          .subscribe((websites: any) => {
            this.websites = websites;
           // this.router.navigate(['/user', this.uid, 'website']);
            this.router.navigate(['/website']);
          }, (error) => {
            if (error) {
              this.errorMsg = error;
              console.log(error);
              this.errorFlag = true;
            }
          });
    }
  }

  DeleteWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    this.activeRouter.params.subscribe(params => {
      return this.websiteService.deleteWebsite(this.website._id)
        .subscribe((websites: any) => {});
    });
  }


  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = this.sharedService.user._id;
      this.website._id = params['wid'];
      this.websiteService.findWebsiteById(params['wid']).subscribe((website: any) => {
        if (website) {
          this.website = website;
        }
      });
      this.websiteService.findWebsitesByUser(this.uid).subscribe(
        (websites: Array<Website>) => {
          if (websites) {
            this.websites = websites;
          }
        }
      );
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.website._id);
    });
  }
}
