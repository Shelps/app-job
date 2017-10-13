import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { AlbumDetailComponent } from './albums/album-detail.component';
import { HttpPostService as PostService } from './posts/http-post.service';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostsComponent,
        AlbumsComponent,
        UsersComponent,
        UserDetailComponent,
        AlbumDetailComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/appjob'},
        PostService
        ],
      imports: [
        AppRoutingModule,
        HttpModule
      ],
    }).compileComponents();
  }));
  it('criar app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('espera 3 links dentro do sidebar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('.box-sidebar'));

    expect(compiled.children.length).toEqual(3);
  }));

  it('click primeiro link do sidebar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.query(By.css('.box-sidebar'));
    const linkPost = compiled.children[0].nativeElement;
    linkPost.click();
    fixture.detectChanges();
    compiled = fixture.debugElement.query(By.css('.box-content'));

    expect(compiled.children.length).toEqual(1);

  }));
});
