import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/services/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  contact?:Contact[];
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.contactService.fetchall().subscribe(data=>{
      this.contact=data;
    })
    
  }

}
