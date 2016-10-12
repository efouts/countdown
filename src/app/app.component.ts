import { Component, OnInit } from '@angular/core';
import { CountdownClock } from './countdownClock';

@Component({
  selector: 'app-root',
  styles: [
    `
    body{
        text-align: center;
        background: #00ECB9;
        font-family: sans-serif;
        font-weight: 100;
    }

    h1{
        color: #396;
        font-weight: 100;
        font-size: 40px;
        margin: 40px 0px 20px;
    }

    #clockdiv{
    	font-family: sans-serif;
    	color: #fff;
    	font-weight: 100;
    	text-align: center;
    	font-size: 30px;
    }

    #clockdiv > div{
    	padding: 10px;
    	border-radius: 3px;
    	background: #00BF96;
    	display: inline-block;
    }

    #clockdiv div > span{
    	padding: 15px;
    	border-radius: 3px;
    	background: #00816A;
    	display: inline-block;
    }

    .smalltext{
    	padding-top: 5px;
    	font-size: 16px;
    }

    `
  ],
  template: `
  <div class='container'>
    <div class='row'>
      <div class='col s12 center-align'>
        <h1>Elliott &amp; Tracy</h1>
      </div>
    </div>
    <div class="row" id="clockdiv">
      <div>
          <span class="days">{{clock.days}}</span>
          <div class="smalltext">Days</div>
      </div>
      <div>
          <span class="hours">{{clock.hours}}</span>
          <div class="smalltext">Hours</div>
      </div>
      <div>
          <span class="minutes">{{clock.minutes}}</span>
          <div class="smalltext">Minutes</div>
      </div>
      <div>
          <span class="seconds">{{clock.seconds}}</span>
          <div class="smalltext">Seconds</div>
      </div>
    </div>
  </div>
  `
})
export class AppComponent implements OnInit {
  clock: CountdownClock

  constructor() {
    var endDate = new Date(1477152000000);
    this.clock = new CountdownClock(endDate);
  }

  ngOnInit() {
    setInterval(() => this.clock.tick(), 1000);
  }
}
