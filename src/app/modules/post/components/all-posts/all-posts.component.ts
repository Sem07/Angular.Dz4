import { Component, OnInit } from '@angular/core';
import { Post } from '../../Post';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  userPosts: Post[] = []

  constructor(private postService: PostService) { 
    this.postService.getPosts().subscribe(value => this.userPosts = value)
  }

  ngOnInit(): void {
  }

}
