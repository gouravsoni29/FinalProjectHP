import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hotel-feed',
  templateUrl: './hotel-feed.component.html',
  styleUrls: ['./hotel-feed.component.css']
})
export class HotelFeedComponent implements OnInit {

  username?:string
  constructor(private loginService:LoginService,private userService:UserService) {
    this.username=this.loginService.getUser().username;
    console.log(this.username);
   }

  ngOnInit(): void {
  }
  onSubmit(){
    Swal.fire('Thank you for your valuable feedback!' ,'success');
    
    // window.location.reload();
    

  }

}
