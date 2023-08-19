import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomaddComponent } from './roomadd/roomadd.component';
import { RoomsComponent } from './rooms.component';
import { RoomBookingComponent } from '../room-booking/room-booking.component';
import { roomGuard } from './guards/room.guard';

const routes: Routes = [
  {path:'roomsadd',component:RoomaddComponent},
  {path:'', component:RoomsComponent,canActivateChild:[roomGuard],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
