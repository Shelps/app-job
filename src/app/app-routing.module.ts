/**
 * Created by italo on 10/12/17.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';


const routes: Routes = [
  { path: 'posts',  component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'comments',     component: CommentsComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'photos',     component: PhotosComponent },
  { path: 'todos',     component: TodosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
