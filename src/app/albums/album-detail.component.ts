/**
 * Created by italo on 10/12/17.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})

export class AlbumDetailComponent implements OnInit {
  photos: any[];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.albumService.getAlbumPhotos(+params['id'])
        .then(photos => this.photos = photos);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
