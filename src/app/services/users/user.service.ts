import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      username: "juanmartin",
      roles: [
        { id: 1, name: "ROLE_ADMIN" },
        { id: 2, name: "ROLE_USER" }
      ]
    },
    {
      id: 2,
      username: "sofia",
      roles: [
        { id: 2, name: "ROLE_USER" }
      ]
    },
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    },
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    ,
    {
      id: 3,
      username: "carlos",

      roles: [
        { id: 3, name: "ROLE_USER" }
      ]
    }
    
  ];

  constructor() { }

  findAll(): Observable<User[]>{
    return of(this.users);
  }
  
}
