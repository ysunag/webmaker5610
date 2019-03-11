import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f')
  registerForm: NgForm;

  username: String;
  password: String;
  verifyPassword: String;
  user: User;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private router: Router, private userService: UserService) {
    this.errorFlag = false;
    this.username = '';
    this.password = '';
    this.verifyPassword = '';
    this.user = new User('', '', '', '', '', '');
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    console.log(this.username);
    console.log(this.password);
    console.log(this.verifyPassword);
    this.user.username = this.username;
    this.user.password = this.password;
    this.userService.createUser(this.user)
      .subscribe((user: any) => {
        this.user = user;
        this.router.navigate(['/user', this.user._id]);
      });
}

  ngOnInit() {
  }

}
