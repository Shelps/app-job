import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import {Post} from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];
  postComments: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .then((posts) => this.posts = posts);
  }

  getPostComments(post) {
    this.postService.getPostCommets(post.id)
      .then(postComments => this.postComments = postComments);
  }

}
