import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
id?:number;
user1:User=new User();
  user:any=null;

  constructor(private loginService:LoginService ,private userService:UserService ,private router:Router) { }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }
  updateuser(id?:number){
   
    this.userService.getId(id);
    this.router.navigate(['user-dashboard/update-profile',id]);
    // window.location.reload();
  }

    
  }


