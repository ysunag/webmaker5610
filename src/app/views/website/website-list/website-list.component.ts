import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../model/website.model.client';




@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  uid: String;
  websites: Array<Website>;

  constructor(private router: ActivatedRoute, private websiteService: WebsiteService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(params['uid']);
      console.log('user id: ' + this.uid);
    });
  }

}
