import { Injectable } from '@angular/core';
import { Room } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  rooms !: Room[];

  getRooms$ = this.getRooms().pipe(
    shareReplay(1)
  )
  getRooms() {
    return this.http.get<Room[]>('./api/rooms');;
  }
  addRoom(room: Room) {
    return this.http.post<Room[]>('./api/rooms', room);
  }
  updateRoom(room: Room) {
    return this.http.put<Room[]>(`./api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(room: Room) {
    return this.http.delete<Room[]>(`./api/rooms/${room.roomNumber}`);
  }
  getRoom() {
    const request = new HttpRequest('GET', "https://jsonplaceholder.typicode.com/photos", {
      reportProgress: true,
    });
    return this.http.request(request);
  }
  constructor(private http: HttpClient) {
    
    console.log("Rooms Service Created");
   }
  
}
