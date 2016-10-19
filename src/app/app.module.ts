import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TripsComponent } from './trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'trips',
        component: TripsComponent,
        pathMatch: 'full'
      }
    ])
    ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
