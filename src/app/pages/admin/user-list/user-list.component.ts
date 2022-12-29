import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user?:User[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe(data=>{
      this.user=data;
    })
  }

  deleteById(id?:number){
    this.userService.deleteUser(id).subscribe(data=>{
      alert("Deleted Successfully");
      window.location.reload();
    })
  }

}
