import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  id!:number;
  user:User=new User();
  constructor(private userService:UserService ,private router:Router,private route:ActivatedRoute,private login:LoginService) { }
// user:any=null
  ngOnInit(): void {
     this.user=this.login.getUser();
    this.id=this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data =>
      { 
        console.log(data);
        this.user=data;
      })
   
  }
  updateUser(){
    this.userService.updateUser(this.user).subscribe(data=>{
      
      console.log(data);
      // this.user=data;
    });
    
    this.router.navigate(['user-dashboard/profile']);

}
}

