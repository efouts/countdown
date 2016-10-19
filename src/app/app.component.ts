import { Component } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  template: `
  <div class='container-fluid'>
    <app-nav-bar></app-nav-bar>
    <div class='container-fluid'>
      <div class='row'>
        <div class='col s12 center-align'>
          <h1 class="cyan-text">Elliott &amp; Tracy</h1>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {

}
