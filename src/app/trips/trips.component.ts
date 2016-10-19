import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  template: `
    <app-upcoming></app-upcoming>
  `,
  styles: []
})
export class TripsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
