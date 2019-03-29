import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../model/website.model.client';
import {UserService} from '../../../services/user.service.client';




@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  uid: String;
  websites: Array<Website>;

  constructor(private router: ActivatedRoute, private websiteService: WebsiteService, private userervice: UserService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      // this.websiteService.findWebsitesByUser(params['uid']).subscribe((websites: any) => {
      //   if (websites) {
      //     this.websites = websites;
      //   }
      // });
      this.userervice.findUserById(params['uid']).subscribe((user: any) => {
        if (user) {
          this.websites = user.websites;
        }
      });
      console.log('user id: ' + this.uid);
    });
  }

}
