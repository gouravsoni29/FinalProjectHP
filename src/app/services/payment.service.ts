import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  public save(payment:any){
    return this.http.post(`${baseUrl}/book/payment`,payment);
  }

  public fetchall():Observable<Payment[]>{
    return this.http.get<Payment[]>(`${baseUrl}/book/allpayment`);

  }


}
