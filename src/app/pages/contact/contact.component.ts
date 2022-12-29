import { Component, OnInit } from '@angular/core';
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
  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
  }

  addContact(){
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
