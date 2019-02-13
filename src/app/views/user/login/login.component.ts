import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router) { this.errorFlag = false; }

  login() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    console.log(this.username);
    console.log(this.password);


    if (this.password !== 'alice') {
      this.errorFlag = true;
    } else {
      this.router.navigate(['/user', '111']);
    }
  }

  ngOnInit() {
  }

}