import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../website-list/website-list.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  uid: String;
  website: Website;

  constructor(private router: ActivatedRoute) {
    this.website = new Website('5', '', '');
  }

  CreateWebsite() {
    console.log(this.website.websiteName);
    console.log(this.website.websiteDescription);

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      console.log('user id: ' + this.uid);
    });
  }

}
