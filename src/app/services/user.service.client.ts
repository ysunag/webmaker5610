import {Injectable} from '@angular/core';
import {User} from '../model/user.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  users: User[] = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@bob'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' , email: 'charly@charly'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@jannunzi' }
  ];
   api = { 'createUser' : this.createUser,
          'findUserById' : this.findUserById,
          'findUserByUsername' : this.findUserByUsername,
          'updateUser' : this.updateUser,
          'findUserByCredentials' : this.findUserByCredentials,
          'deleteUser' : this.deleteUser
   };


  baseUrl = environment.baseUrl;


  createUser(user: any) {
    // user._id = Math.random().toString(36).substr(2, 9);
    //     // this.users.push(user);
    //     // return user;
    return this.http.post(this.baseUrl + '/api/user', user).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  findUserById(userId: string) {
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     return this.users[x];
    //   }
    // }
    return this.http.get(this.baseUrl + '/api/user/' + userId).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  findUserByUsername(userName: string) {
    // for (const user of this.users) {
    //   if (user.username === userName) {
    //     return user;
    //   }
    // }
    return this.http.get(this.baseUrl + '/api/user?username=' + userName).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }
  updateUser(userId, user) {
    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i]['_id'] === userId) {
    //     user[i] = user;
    //     return;
    //   }
    // }
    const url =  this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).pipe(map((response: Response) => {
      return response.json();
    }));
  }

  findUserByCredentials(username, password) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }

  deleteUser(userId: String) {
    // for (const i in this.users) {
    //   if (this.users[i]._id === userId) {
    //     const j = +i;
    //     this.users.splice(j, 1);
    //   }
    // }
    return this.http.delete(this.baseUrl + '/api/user/' + userId).pipe(
      map((response: Response) => {
        return response.json();
      }));
  }
}
