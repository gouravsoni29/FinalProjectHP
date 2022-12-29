import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }


  public addhotel(hotel:any){
    return this.http.post(`${baseUrl}/hotel/addHotel`,hotel);
  }

  public fetchall():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(`${baseUrl}/hotel/all`);
  }

  public getById(id?:number):Observable<Hotel>{
    return this.http.get<Hotel>(`${baseUrl}/hotel/${id}`)
  }
  public deleteById(id?:number):Observable<Object>{
    return this.http.delete(`${baseUrl}/hotel/delete/${id}`);
  }

}
