import { Component, OnInit } from '@angular/core';

export interface Trip {
  tripName: string;
  tripStartDate: string;
  tripEndDate: string;
  imageUrl: string;
}

@Component({
  selector: 'app-upcoming',
  template: `
    <div class="row">
      <div class="col s12">
        <h2 class="cyan-text">Upcoming</h2>
      </div>
    </div>
    <div class="row">
     <div *ngFor="let trip of trips" class="col s12 m6 l3">
       <div class="card">
         <div class="card-image">
           <img src="{{trip.imageUrl}}">
           <span class="card-title">{{trip.tripName}}</span>
         </div>
         <div class="card-content">
           <p>From {{trip.tripStartDate}} to {{trip.tripEndDate}}</p>
         </div>
         <div class="card-action">
           <a href="#">Google Map link here?</a>
         </div>
       </div>
     </div>
   </div>
  `,
  styles: []
})
export class UpcomingComponent implements OnInit {

  trips: Trip[] = [{
    tripName: "Montreal",
    tripStartDate: "10/27/16",
    tripEndDate: "10/31/16",
    imageUrl: "assets/img/montreal.jpg"
  },
  {
    tripName: "San Francisco",
    tripStartDate: "11/2/16",
    tripEndDate: "11/12/16",
    imageUrl: "assets/img/sf.jpg"
  },
  {
    tripName: "Key West",
    tripStartDate: "11/23/16",
    tripEndDate: "11/27/16",
    imageUrl: "assets/img/key-west.jpg"
  },
  {
    tripName: "Miami",
    tripStartDate: "11/27/16",
    tripEndDate: "11/29/16",
    imageUrl: "assets/img/miami.jpg"
  }];

  constructor() { }

  ngOnInit() {
  }

}
