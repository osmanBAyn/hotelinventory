import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { bookingGuardGuard } from './guards/booking-guard.guard';

const routes: Routes = [{ path: '', component: BookingComponent ,canDeactivate:[bookingGuardGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
