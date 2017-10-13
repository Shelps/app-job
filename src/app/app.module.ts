import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { AlbumDetailComponent } from './albums/album-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { HttpPostService } from './posts/http-post.service';
import { HttpUserService as UserService } from './users/http-user.service';
import { HttpAlbumService as AlbumService } from './albums/http-album.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    UsersComponent,
    UserDetailComponent,
    AlbumDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HttpPostService,
    UserService,
    AlbumService,
    {provide: APP_BASE_HREF, useValue: '/appjob'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
