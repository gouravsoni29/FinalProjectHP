import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id?:number;

  constructor(private http: HttpClient) {}

  //add user

  public addUser(user: any) {
    return this.http.post(`${baseUrl}/user/`, user);
  }

  public getAll():Observable<User[]>{
    return this.http.get<User[]>(`${baseUrl}/user/all`);

  }

  // public getUserById(username:string):Observable<User>{
  //   return this.http.get<User>(`${baseUrl}/user/${username}`);
  // }
  public getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${baseUrl}/user/${id}`);
  }

  public deleteUser(id?:number):Observable<Object>{
    return this.http.delete<Object>(`${baseUrl}/user/${id}`)
  }
  getId(getId?:number){
    this.id=getId;
  }
  

  public updateUser(user?:User):Observable<Object>{
    return this.http.put<Object>(`${baseUrl}/user/users/${this.id}`,user);
  }
}
