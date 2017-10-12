/**
 * Created by italo on 10/12/17.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(`${this.url}/posts`)
      .toPromise()
      .then(res => res.json());
  }

  getPostCommets(id: number) {
    return this.http.get(`${this.url}/posts/${id}/comments`)
      .toPromise()
      .then(res => res.json());
  }
}

