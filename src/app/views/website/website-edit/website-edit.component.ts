import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../model/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  uid: String;
  website: Website;
  websites: Array<Website>;

  constructor(private router: ActivatedRoute, private websiteService: WebsiteService) {
    this.website = new Website('', '', '', '');
  }

  UpdateWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    this.router.params.subscribe(params => {
      return this.websiteService.updateWebsite(this.website._id, this.website)
        .subscribe((websites: any) => {
          this.websites = websites;
        });
    });
  }

  DeleteWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    this.router.params.subscribe(params => {
      return this.websiteService.deleteWebsite(this.website._id)
        .subscribe((websites: any) => {
          this.websites = websites;
        });
    });
  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.website._id = params['wid'];
      this.websiteService.findWebsiteById(params['wid']).subscribe((website: any) => {
        if (website) {
          this.website = website;
        }
      });
      this.websiteService.findWebsitesByUser(params['uid']).subscribe(
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
