import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Contact } from 'src/app/services/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // contact?:Contact[];
  contact:Contact=new Contact();
  constructor(private contactService:ContactService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  addContact(){
    if(this.contact.firstName=='' || this.contact.firstName==null){
      this.snack.open('First name is required !! ', '', {
        duration: 2000,
      });
      return;
    }
    if(this.contact.lastName=='' || this.contact.lastName==null){
      this.snack.open('Last name is required !! ', '', {
        duration: 2000,
      });
      return;
    }

    if(this.contact.email==null || this.contact.email==''){
      this.snack.open('Email is required !! ', '', {
        duration: 2000,
      });
      return;
    }

   
    if(this.contact.phoneno=='' || this.contact.phoneno==null){
      this.snack.open('Phone is required !! ', '', {
        duration: 2000,
      });
      return;
    }
    if(this.contact.message=='' || this.contact.message==null){
      this.snack.open('Message is required !! ', '', {
        duration: 2000,
      });
      return;
    }
    this.contactService.addcontact(this.contact).subscribe(data=>{
      this.contact=data;
      Swal.fire('Successfully Submitted');
      console.log("data submitted");
    },(error) => {
      //error
      console.log(error);
      alert('Please Login FIrst');
    })
    
  }

}
