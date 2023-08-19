import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent {
  id$ = this.router.params.pipe(map((p)=>p['id']))
  constructor(private router : ActivatedRoute){
  }
}
