import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  <nav>
    <div class="nav-wrapper light-blue">
      <a href="#" class="brand-logo center"><3</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a routerLink="/trips">Trips</a></li>
      </ul>
    </div>
  </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
