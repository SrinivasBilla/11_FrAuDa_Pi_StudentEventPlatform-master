import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  title:any;
  shortTitle:any;
  description:any;
  type:any;
  price:any;
  image:any;
  eventLocation:any;
  date:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let event = {
      title: this.title,
      shortTitle: this.shortTitle,
      description: this.description,
      type: this.type,
      price: this.price,
      eventLocation: this.eventLocation,
      date: this.date
    }

    this.firebaseService.addEvent(event);

    this.router.navigate(['events']);
    this.flashMessage.show('SuccessFully Added an event',
    {cssClass: 'alert-success', timeout: 3000});
  }

}
