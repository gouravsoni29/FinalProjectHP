import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/services/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { LoginService } from 'src/app/services/login.service';
import { Payment } from 'src/app/services/payment';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  username?: string;
  currentD = new Date();
  payment:Payment=new Payment();
  hotel!:Hotel;
  id?:number

  constructor(private loginService: LoginService, private paymentService: PaymentService,private router:Router,private hotelService:HotelService,private route:ActivatedRoute,private snack:MatSnackBar) {
    this.username = this.loginService.getUser().username;
    // let currentDate=this.datepipe.transform((new Date),'MM/dd/yyy h:mm:ss')
    console.log(this.username);
   
    
  }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    // this.hotel=new Hotel();
    // this.hotelService.getById(this.id).subscribe(data=>{
    //   this.hotel=data;
    //   console.log(this.hotel)
    // }) 

  }
  doPayment(){
    if(this.payment.paymentDate=='' || this.payment.paymentDate==null ){
      this.snack.open('Please Fill the details !! ', '', {
        duration: 3000,
      });
      return;
      
    }
    this.payment.username=this.username;
    this.paymentService.save(this.payment).subscribe(data=>{
      this.payment=data;
      
    })
    Swal.fire("Good job!", "Your payment is Successfull!", "success");
      this.router.navigate(['user-dashboard'])

  }

}
