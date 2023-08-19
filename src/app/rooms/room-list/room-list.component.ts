import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // <-- added change detection strategy
})
export class RoomListComponent implements OnInit,OnChanges,OnDestroy {
  @Input() roomsToUse!: Room[]; // <-- added Input annotation
  @Input() price=0;
  ngOnChanges(changes:SimpleChanges): void {
    console.log(this.roomsToUse);
  } 
  ngOnInit(): void {
    
  }
  
  ngOnDestroy(): void {
    console.log("Room List Component Destroyed");
  }
}

// Path: hotelinventoryapp\src\app\rooms\room-list\room-list.component.html
