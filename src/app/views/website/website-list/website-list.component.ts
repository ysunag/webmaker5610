import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export class Website {
  _id: String;
  websiteName: String;
  websiteDescription: String;


  constructor(_id, websiteName, websiteDescription) {
    this._id = _id;
    this.websiteName = websiteName;
    this.websiteDescription = websiteDescription;
  }

}

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  uid: String;
  websiteList: Array<Website>;

  constructor(private router: ActivatedRoute) {
    this.websiteList = [new Website(1, 'Address Book App', 'Address Book App'), new Website(2, 'Blogger', 'Blogger'),
      new Website(3, 'Blogging App', 'Blogging App'), new Website(4, 'Script Testing App', 'Script Testing App')];
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      console.log('user id: ' + this.uid);
    });
  }

}
