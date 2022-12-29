import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.component.html',
  styleUrls: ['./book-history.component.css']
})
export class BookHistoryComponent implements OnInit {
  book?:Book[];
  username1?:string;

  constructor(private bookService:BookService,private login:LoginService) {
    this.username1=this.login.getUser().username;
   }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(){
    this.bookService.fetchall().subscribe(data=>{
      this.book=data;
    })
  }
  cancelBooking(id?: number){
    this.bookService.cancelBooking(id).subscribe(data=>{
      // this.book=data;
      console.log(data);
      Swal.fire("Good job!", "Deleted Successfull!", "success");
      
      this.getHistory();
    })
  }

}
