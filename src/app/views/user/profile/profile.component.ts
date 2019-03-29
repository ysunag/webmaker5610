import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: User;
  userId: string;
  username: String;

  constructor(private router: ActivatedRoute, private userService: UserService) {
    this.user = new User('', '', '', '', '', '');
  }

  UpdateUser() {
    console.log(this.user['username']);
    console.log(this.user['firstName']);
    console.log(this.user['lastName']);
    console.log(this.user['email']);
    this.router.params.subscribe(params => {
      return this.userService.updateUser(this.user['_id'], this.user)
        .subscribe((user: any) => {
            this.user = user;
        });
    });
  }

  DeleteUser() {
    console.log('delete user');
    this.router.params.subscribe(params => {
      return this.userService.deleteUser(this.user['_id'])
        .subscribe((res: any) => {
          console.log(res);
        });
    });
  }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.userId = params['uid'];
      console.log(this.userId);

      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          if (user) {
            this.user = user;
          }
        });
      console.log(this.user);
      this.username = this.user['username'];
    });
  }

}
