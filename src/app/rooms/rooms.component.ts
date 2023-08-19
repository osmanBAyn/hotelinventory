import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { Room } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { RouteConfigToken } from '../services/routeConfig.service';
import { RouteConfig } from '../services/routeConfig';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, OnDestroy {
  hotelName = 'Hilton Hotel';
  hidden = false;
  deleteRoomList() {
    this.hidden = !this.hidden;
  }
  constructor(private roomsService: RoomsService,private configService:ConfigService,@Inject(RouteConfigToken) private routeConfig:RouteConfig) {
    console.log(routeConfig)
  }
  stream = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });
  rooms!: Room[];
  totalBytes = 0;
  formFilter = new FormControl(0);
  error$ = new Subject<String>();
  getError$ = this.error$.asObservable();
  roomSubscription$ = this.roomsService.getRooms$.pipe(
    catchError((error) => {
      this.error$.next(error.message);
      return of([]);
    })
  );
  roomCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )
  ngOnInit(): void {
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log("This is the end"),
    //   error: (error) => console.log(error)
    // });
    this.roomsService.getRoom().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request Sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request successful');
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log('Download in progress');
          this.totalBytes += event.loaded;
          console.log(this.totalBytes);
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
        case HttpEventType.User:
      }
    });
  }
  addRoom() {
    const room: Room = {
      amenities: 'TV, AC, Heater',
      checkinTime: '12:00 PM',
      checkoutTime: '11:00 AM',
      photos:
        'https://images.unsplash.com/photo-1581093458791-1b8d5d0e8c6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBib3JkJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      price: 1000,
      rating: 4.5,
      roomNumber: '101',
      roomType: 'Deluxe',
    };
    this.roomsService.addRoom(room).subscribe((room) => {
      this.rooms = room;
    });
    
  }
  editRoom() {
    const room: Room = {
      amenities: 'TV, AC, Heater',
      checkinTime: '12:00 PM',
      checkoutTime: '11:00 AM',
      photos:
        'https://images.unsplash.com/photo-1581093458791-1b8d5d0e8c6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBib3JkJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      price: 1000,
      rating: 4.5,
      roomNumber: '3',
      roomType: 'Ordinary',
    };
    this.roomsService.updateRoom(room).subscribe((room) => {
      this.rooms = room;
    });
  }
  deleteRoom() {
    this.roomsService.deleteRoom(this.rooms[4]).subscribe((room) => {
      this.rooms = room;
    });
  }
  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;
  @ViewChild('noRooms', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  ngAfterViewInit() {
    const compRef = this.vcr.createComponent(HeaderComponent);
    compRef.instance.title = 'Hello from Rooms Component';
    this.name.nativeElement.innerText = 'Hello from Rooms Component';
    this.headerComponents.get(2)!.title = 'Hello from Rooms Component';
  }
  ngOnDestroy() {}
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
