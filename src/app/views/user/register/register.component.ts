import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  verifyPassword: String;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router) { this.errorFlag = false; }

  register() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifyPassword = this.loginForm.value.verifyPassword;
    console.log(this.username);
    console.log(this.password);
    console.log(this.verifyPassword);


    // add to database
    this.router.navigate(['/user', '111']);
  }

  ngOnInit() {
  }

}
