import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/services/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotel?:Hotel[];

  constructor(private hotelService:HotelService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.hotelService.fetchall().subscribe(data=>{
      this.hotel=data;
    })
  }
 
  addhotel(){
    this.router.navigate(['admin/add-hotel']);

  }

  deleteHotel(id?:number){
    this.hotelService.deleteById(id).subscribe(data=>{
      window.location.reload();
    })
  }
}
