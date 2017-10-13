/**
 * Created by italo on 10/12/17.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { url } from '../constants';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpAlbumService {
  private url = url;
  constructor(private http: Http) {}

  getAlbums() {
    return this.http.get(`${this.url}/albums?_limit=15`)
      .toPromise()
      .then(res => res.json());
  }

  getAlbumPhotos(id: number) {
    return this.http.get(`${this.url}/albums/${id}/photos`)
      .toPromise()
      .then(res => res.json());
  }
}
