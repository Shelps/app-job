/**
 * Created by italo on 10/12/17.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  getAlbums() {
    return this.http.get(`${this.url}/albums`)
      .toPromise()
      .then(res => res.json());
  }

  getAlbumPhotos(id: number) {
    return this.http.get(`${this.url}/albums/${id}/photos`)
      .toPromise()
      .then(res => res.json());
  }
}
