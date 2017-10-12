import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { PostService } from './posts/post.service';
import { UserService } from './users/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
