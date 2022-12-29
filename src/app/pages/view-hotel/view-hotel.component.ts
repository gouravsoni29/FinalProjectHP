import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/services/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {
  id?:number;
  hotel!:Hotel;

  constructor(private route:ActivatedRoute,private hotelService:HotelService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.hotel=new Hotel();
    this.hotelService.getById(this.id).subscribe(data=>{
      this.hotel=data;
    });

  }
  search(){
    this.router.navigate(['search'])

  }

}
