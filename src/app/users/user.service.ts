/**
 * Created by italo on 10/12/17.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  getUsers() {
    return this.http.get(`${this.url}/users`)
      .toPromise()
      .then(res => res.json());
  }

  getUser(id: number) {
    return this.http.get(`${this.url}/users/${id}`)
      .toPromise()
      .then(res => res.json());
  }
}
