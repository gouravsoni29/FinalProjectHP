import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  

book?:Book[];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.bookService.fetchall().subscribe(data=>{
      this.book=data;
    })
  }

 

}
