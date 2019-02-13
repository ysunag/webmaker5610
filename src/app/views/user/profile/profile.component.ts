import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';


export class User {
  _id: String;
  username: String;
  password: String;

  firstName: String;
  lastName: String;
  email: String;

  constructor(_id, username, password, firstName, lastName, email) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  user: User;

  constructor(private router: ActivatedRoute) { this.user = new User('111', 'alice', 'alice', 'alice', 'alice', 'alice@alice'); }

  UpdateUser() {
    console.log(this.user.username);
    console.log(this.user.firstName);
    console.log(this.user.lastName);
    // update info in database
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.user._id = params['uid'];
      console.log('user id: ' + this.user._id);
    });
  }

}
