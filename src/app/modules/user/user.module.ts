import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllUsersComponent }])
  ],
  providers: [UserService]
})
export class UserModule { }
