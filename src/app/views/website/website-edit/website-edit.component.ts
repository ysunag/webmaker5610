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

  constructor(private router: ActivatedRoute, private websiteService: WebsiteService) {}

  UpdateWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    this.websiteService.updateWebsite(this.website._id, this.website);
  }

  DeleteWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    this.websiteService.deleteWebsite(this.website._id);
  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.website = this.websiteService.findWebsiteById(params['wid']);
      this.websites = this.websiteService.findWebsitesByUser(params['uid']);
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.website._id);
    });
  }
}
