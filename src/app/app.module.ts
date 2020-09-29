import { PostModule } from './modules/post/post.module';

import { UserModule } from './modules/user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComentsModule } from './modules/coments/coments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    PostModule,
    HttpClientModule,
    ComentsModule,
    RouterModule.forRoot([
      { path: 'users', loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)},
      { path: 'posts', loadChildren:()=> import('./modules/post/post.module').then(m => m.PostModule)},
      { path: 'comments', loadChildren:()=> import('./modules/coments/coments.module').then(m => m.ComentsModule) },
    ],
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
