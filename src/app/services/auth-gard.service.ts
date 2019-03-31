import {Injectable} from '@angular/core';
import {UserService} from './user.service.client';
import {CanActivate} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.loggedIn();
  }
}
