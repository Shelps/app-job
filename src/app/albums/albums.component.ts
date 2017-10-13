import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any[];
  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit() {
    this.albumService.getAlbums()
      .then((albums) => this.albums = albums);
  }

  getPhotos(album) {
    this.router.navigate(['/albums/photos', album.id]);
  }

}
