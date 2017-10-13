/**
 * Created by italo on 10/12/17.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { AlbumDetailComponent } from './albums/album-detail.component';

const routes: Routes = [
  { path: 'posts',  component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/photos/:id', component: AlbumDetailComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
