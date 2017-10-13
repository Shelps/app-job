import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { AlbumDetailComponent } from './albums/album-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { PostService } from './posts/post.service';
import { UserService } from './users/user.service';
import { AlbumService } from './albums/album.service';

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
    PostService,
    UserService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
