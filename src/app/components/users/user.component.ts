import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  users : User[] = [];

  constructor(private service: UserService){

  }

  ngOnInit(): void {
    this.service.findAll().subscribe(users=>this.users = users);
   }

}
