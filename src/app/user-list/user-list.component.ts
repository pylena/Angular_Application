import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log('Users:', users);

      users.forEach(user => {
        this.userService.getPosts(user.id).subscribe(posts => {
          console.log(`Posts for ${user.name}:`, posts);
        });
      });
    });

/*
  export class UserListComponent implements OnInit {
    users: any[] = [];
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.getUsers().subscribe(users => {
        users.forEach(user => {
          this.userService.getPosts(user.id).subscribe(posts => {
            user.postCount = posts.length;
          });
        });
        this.users = users;
      });
    }
  }
 */
