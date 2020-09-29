import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AllPostsComponent },    
    ])
  ],
  providers: [PostService]
})
export class PostModule { }
