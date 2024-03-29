import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-add-housing',
  templateUrl: './add-housing.component.html',
  styleUrls: ['./add-housing.component.css']
})
export class AddHousingComponent implements OnInit {
  shortTitle:any;
  description:any;
  type:any;
  price:any;
  image:any;
  address:any;
  date:any;
  bedroom:any;
  bathroom:any;
  sqft:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      shortTitle: this.shortTitle,
      description: this.description,
      type: this.type,
      price: this.price,
      address: this.address,
      date: this.date,
      bedroom: this.bedroom,
      bathroom: this.bathroom,
      sqft: this.sqft,
    }

    this.firebaseService.addListing(listing);

    this.router.navigate(['housing']);
    this.flashMessage.show('SuccessFully Added...',
    {cssClass: 'alert-success', timeout: 3000});
  }

}
