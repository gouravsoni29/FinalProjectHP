import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Hotel } from 'src/app/services/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  hotel:Hotel=new Hotel();

  constructor(private hotelService: HotelService,private router:Router) { }

  ngOnInit(): void {
  }
  savehotel(){
    this.hotelService.addhotel(this.hotel).subscribe(data=>{
      this.hotel=data;
      this.router.navigate(['/admin/hotel-list'])
    
    })
  }

}
