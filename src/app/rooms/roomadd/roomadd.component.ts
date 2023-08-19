import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Room } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roomadd',
  templateUrl: './roomadd.component.html',
  styleUrls: ['./roomadd.component.scss']
})
export class RoomaddComponent {
  room:Room ={
    amenities:'',
    checkinTime:'',
    checkoutTime:'',
    photos:'',
    price:0,
    rating:0,
    roomNumber:'',
    roomType:''
  } 
  
  successMessage:string = '';
  constructor(private roomsService: RoomsService) { } 
  addRoom(roomsForm:NgForm){
    this.roomsService.addRoom(this.room).subscribe((data)=>{this.successMessage = 'Room Added Successfully';console.log(data);roomsForm.resetForm({
    amenities:'',
    checkinTime:'',
    checkoutTime:'',
    photos:'',
    price:0,
    rating:0,
    roomNumber:'asd',
    roomType:''
    })});
  }
}
