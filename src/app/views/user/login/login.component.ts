import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f')
  loginForm: NgForm;

  username: String;
  password: String;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router, private userService: UserService) { this.errorFlag = false; }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.userService.findUserByCredentials(username, password)
      .subscribe((user: any) => {
        if (user) {
          this.router.navigate(['/profile', user._id ]);
        }
      });
  }


  ngOnInit() {}

}
