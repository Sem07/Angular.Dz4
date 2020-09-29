import {Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUsersComponent {

  usersList: User[] = [];


  constructor(private userService: UserService        
  ) {
     this.userService.getUser()
      .subscribe(value => this.usersList = value)
     }
}