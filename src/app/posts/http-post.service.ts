/**
 * Created by italo on 10/12/17.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { url } from '../constants';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpPostService {
  private url = url;

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(`${this.url}/posts?_limit=15`)
      .toPromise()
      .then(res => res.json());
  }

  getPostCommets(id: number) {
    return this.http.get(`${this.url}/posts/${id}/comments`)
      .toPromise()
      .then(res => res.json());
  }
}


