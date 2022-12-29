import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Payment } from 'src/app/services/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  payment1?:Payment[];
  username1?:string;

  constructor(private payService:PaymentService,private router:Router,private login:LoginService) {
    this.username1=this.login.getUser().username;
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.payService.fetchall().subscribe(data=>{
      this.payment1=data;
    })

  }

}
