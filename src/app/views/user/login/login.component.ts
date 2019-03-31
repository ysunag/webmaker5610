import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

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

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) { this.errorFlag = false; }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    console.log('username:' + username);
    console.log('password:' + password);
    // this.userService.findUserByCredentials(username, password)
    //   .subscribe((user: User) => {
    //     if (user) {
    //       this.router.navigate(['/user', user._id ]);
    //       } else {
    //       console.log(username);
    //       console.log(password);
    //       this.errorFlag = true;
    //     }
    // });
    this.userService.login(username, password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/user', this.sharedService.user._id ]);
          },
        (error: any) => {
          console.log(error);
          if (error) {
            this.errorFlag = true;
            console.log(error);
          }
        }
      );

  }


  ngOnInit() {
    console.log('init login page');
  }

}
