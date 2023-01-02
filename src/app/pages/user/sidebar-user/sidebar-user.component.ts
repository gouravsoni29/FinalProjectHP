import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  constructor(private login : LoginService) { }

  ngOnInit(): void {
//     this.isLoggedIn = this.login.isLoggedIn();
//     this.user = this.login.getUser();
//     this.login.loginStatusSubject.asObservable().subscribe((data) => {
//       this.isLoggedIn = this.login.isLoggedIn();
//       this.user = this.login.getUser();
//   }
// }
  }
public logout() {
  this.login.logout();
  window.location.reload();
  // this.login.loginStatusSubject.next(false);
}

}
