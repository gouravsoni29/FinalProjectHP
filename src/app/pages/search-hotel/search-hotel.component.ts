import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ViewHotelComponent } from '../view-hotel/view-hotel.component';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
  bookHotel(){

  }
  viewDetails(){
    this.router.navigate(['view-hotel'])

  
  }

}
