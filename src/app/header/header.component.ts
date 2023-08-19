import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RoomsService]
})
export class HeaderComponent implements OnInit,AfterContentInit {
  
  title:String="Hello from Header Component";
  //@ContentChild(RoomListComponent) titleRef!: any;
  ngOnInit(): void {
    
  }
  ngAfterContentInit() {
   // console.log(this.titleRef);
  }
constructor(private roomsService : RoomsService) { }

}
