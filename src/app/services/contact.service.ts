import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  public addcontact(contact?:Contact):Observable<Object>{
    return this.http.post<Object>(`${baseUrl}/user/contactus`,contact);

  }

  public fetchall():Observable<Contact[]>{
    return this.http.get<Contact[]>(`${baseUrl}/user/allfeed`);
  }


}
