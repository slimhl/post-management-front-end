import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = 50;
  posts:Post[];

  getPosts(): void {
      this.postService.getPosts()
        .subscribe((data: Post[]) => this.posts=data);
  }

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

}
