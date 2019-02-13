import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../website-list/website-list.component';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  uid: String;
  website: Website;

  constructor(private router: ActivatedRoute) {
    this.website = new Website(1, 'Address Book App', 'Address Book App');
  }

  UpdateWebsite() {
    console.log(this.website.websiteName);
    console.log(this.website.websiteDescription);
  }

  DeleteWebsite() {
    console.log(this.website.websiteName);
    console.log(this.website.websiteDescription);
  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.website._id = params['wid'];
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.website._id);
    });
  }
}
