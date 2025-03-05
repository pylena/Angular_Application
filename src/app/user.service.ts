import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   usersUrl = 'https://jsonplaceholder.typicode.com/users';
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.postsUrl}?userId=${userId}`);
  }
}