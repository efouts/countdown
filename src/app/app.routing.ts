import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent }   from './trips/trips.component';
import { CountdownComponent }   from './countdown/countdown.component';

const routes: Routes = [
  { path: '', redirectTo: '/countdown', pathMatch: 'full' },
  { path: 'trips',  component: TripsComponent },
  { path: 'countdown',  component: CountdownComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
