import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Book } from './book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  //add user

  public book(user: any) {
    return this.http.post(`${baseUrl}/book/savebook`, user);
  }

  public fetchall():Observable<Book[]>{
    return this.http.get<Book[]>(`${baseUrl}/book/all`);

  }

  public cancelBooking(id?:number):Observable<Object>{
    return this.http.delete<Object>(`${baseUrl}/book/delete/${id}`);
  }
}


