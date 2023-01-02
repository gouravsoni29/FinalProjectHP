import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack: MatSnackBar,private router:Router) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);

    if (this.user.firstName == '' || this.user.firstName == null) {
      this.snack.open('Firstname is required !! ', '', {
        duration: 1000,
      });
      return; 
    }
    if (this.user.lastName == '' || this.user.lastName == null) {
      this.snack.open('Lastname is required !! ', '', {
        duration: 1000,
      });
      return;
      
    }
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 1000,
      });
      return;
      
    }
    if (this.user.phone == '' || this.user.phone == null) {
      this.snack.open('Phone is required !! ', '', {
        duration: 1000,
      });
      return;
    }
    if (this.user.email == '' || this.user.email == null) {
      this.snack.open('Email is required !! ', '', {
        duration: 1000,
      });
      return;
      
      
    }

    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('Password is required !! ', '', {
        duration: 1000,
      });
      return;
    }
      
    // }
    
    
   
   

    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        Swal.fire('Successfully Registered!,Please Sign In !' , 'success');
        this.router.navigate(['login']);
        // alert('success');
        
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
        
      }
    );
  }


}

