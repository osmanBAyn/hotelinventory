import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../rooms';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {
  @Input() Getroom!: Room; // <-- added Input annotation
  onBookRoom() {
    console.log("Room Booked");
  }
}
