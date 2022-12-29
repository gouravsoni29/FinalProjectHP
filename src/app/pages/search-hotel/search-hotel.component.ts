import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Hotel } from 'src/app/services/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  hotel?: Hotel[];
  id?: number;

  constructor(private router: Router, private hotelService: HotelService) { }

  ngOnInit(): void {
    //this.getAllHotel();

  }
  
  searchText='';
  getAllHotel() {
    this.hotelService.fetchall().subscribe(data => {
      this.hotel = data;
      

    })
  }
  bookHotel(id?:number) {

    //console.log("redirecting");
    this.router.navigate(['bookhotel',id])
    // window.location.reload();

  }
  viewDetails(id?:number) {


    this.router.navigate(['view-hotel',id])


  }

}
