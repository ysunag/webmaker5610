import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

   api = { 'createUser' : this.createUser,
          'findUserById' : this.findUserById,
          'findUserByUsername' : this.findUserByUsername,
          'updateUser' : this.updateUser,
          'findUserByCredentials' : this.findUserByCredentials,
          'deleteUser' : this.deleteUser
   };


  baseUrl = environment.baseUrl;


  createUser(user: any) {
    return this.http.post(this.baseUrl + '/api/user', user).pipe(
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
    return this.http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password).pipe(
      map((response) => {
        return response;
      }));
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId).pipe(
      map((response) => {
        return response;
      }));
  }
}
