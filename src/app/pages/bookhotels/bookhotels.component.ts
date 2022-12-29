import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book.service';
import { Hotel } from 'src/app/services/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-bookhotels',
  templateUrl: './bookhotels.component.html',
  styleUrls: ['./bookhotels.component.css']
})
export class BookhotelsComponent implements OnInit {

  book:Book=new Book();
  id?:number;
 hotel!:Hotel;
 username?:string
  constructor(private route:ActivatedRoute,private bookService:BookService,private router:Router,private hotelService:HotelService,private loginService:LoginService) { 
    this.username=this.loginService.getUser().username;
    console.log(this.username);
    
  }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.hotel=new Hotel();
    this.hotelService.getById(this.id).subscribe(data=>{
      this.hotel=data;
    })  
  }

booking(){
  this.book.username=this.username;
  this.bookService.book(this.book).subscribe(data=>{
    this.book=data;
    console.log(data)
    this.router.navigate(['payment']);
  },(error) => {
    //error
    console.log(error);
    alert('Please Login First');
  });
}

}
