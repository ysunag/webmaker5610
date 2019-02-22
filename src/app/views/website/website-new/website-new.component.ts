import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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

  constructor(private router: ActivatedRoute, private websiteService: WebsiteService ) {}

  CreateWebsite() {
    console.log(this.website.name);
    console.log(this.website.description);
    this.websiteService.createWebsite(this.uid, this.website);

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(params['uid']);
      console.log('user id: ' + this.uid);
    });
  }

}
