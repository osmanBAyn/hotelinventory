import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomItemComponent } from './room-list/room-item/room-item.component';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderModule } from '../header/header.module';
import { RoomaddComponent } from './roomadd/roomadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomBookingComponent } from '../room-booking/room-booking.component';
import { RouteConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [RoomsComponent,RoomBookingComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomaddComponent,
    FilterPipe],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    {provide:RouteConfigToken,useValue:{title:"Rooms"}}
  ]

})
export class RoomsModule { }
