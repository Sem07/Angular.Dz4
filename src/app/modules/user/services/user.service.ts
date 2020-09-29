import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]>{
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users')
  }
}
