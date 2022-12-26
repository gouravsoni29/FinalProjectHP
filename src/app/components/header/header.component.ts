import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  isLoggedIn = false;
  user = null;
  user1=null;
  seller1=false;
  customer1=false;

  constructor(public login: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
      this.user1=this.login.getUserRole();
      if(this.user1=='ADMIN'){
        this.seller1=true;
      }
      if(this.user1=='NORMAL'){
        this.seller1=true;
      }
    });
  }

  public logout() {
    this.login.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }


}
