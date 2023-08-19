import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Room[] , price:number): Room[] {
    return value.filter((room)=> room.price >= price);
  }

}
