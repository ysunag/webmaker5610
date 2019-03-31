import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';


@Injectable()
export class UserService {

  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {}

   api = { 'createUser' : this.createUser,
          'findUserById' : this.findUserById,
          'findUserByUsername' : this.findUserByUsername,
          'updateUser' : this.updateUser,
          'findUserByCredentials' : this.findUserByCredentials,
          'deleteUser' : this.deleteUser,
          'login': this.login,
          'logout': this.logout,
          'loggedIn': this.loggedIn,
   };


  baseUrl = environment.baseUrl;

  options = {withCredentials: true}


  login(username: string, password: string) {

    const body = {
      username : username,
      password : password,
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options);
  }

  logout() {
    return this.http.post(this.baseUrl + '/api/logout', '', this.options);
  }



  register(username: String, password: String) {

    const user = {
      username : username,
      password : password
    };

    return this.http.post(this.baseUrl + '/api/register', user, this.options);
  }


  loggedIn() {
    return this.http.post(this.baseUrl + '/api/loggedin', '', this.options).pipe(
      map((user) => {
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    ));

  }






  createUser(user: any) {
    const newUser = {firstName: user.firstName, lastName: user.lastNAme, email : user.email, password: user.password,
      username: user.username};
    return this.http.post(this.baseUrl + '/api/user', newUser).pipe(
      map((response) => {
        return response;
      }));
  }

  findUserById(userId: string) {
    return this.http.get<User>(this.baseUrl + '/api/user/' + userId).pipe(
      map((response) => {
        return response;
      }));
  }

  findUserByUsername(userName: string) {
    return this.http.get<User>(this.baseUrl + '/api/user?username=' + userName).pipe(
      map((response) => {
        return response;
      }));
  }
  updateUser(userId, user) {
    const url =  this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).pipe(map((response) => {
      return response;
    }));
  }

  findUserByCredentials(username, password) {
    console.log('find user by credentials');
    return this.http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId).pipe(
      map((response) => {
        return response;
      }));
  }
}
