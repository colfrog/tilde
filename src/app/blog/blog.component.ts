import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Post } from './post/post.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'tld-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts: Observable<Post[]>;
  constructor(private httpClient: HttpClient,
              public loginService: LoginService) {
    this.posts = httpClient.get<Post[]>('/api/blog/posts')
      .pipe(
        map(posts => posts.sort((p1, p2) => p1.time < p2.time ? 1 : -1))
      );
  }
}
