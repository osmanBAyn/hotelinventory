import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { inject } from '@angular/core';
export const bookingGuardGuard: CanDeactivateFn<BookingComponent> = (component:BookingComponent, currentRoute, currentState, nextState) => {
  const matSnackBarModule = inject(MatSnackBar);
  
  if(component.bookingForm.dirty){
    matSnackBarModule.open('Are you sure you want to leave this page?','Yes');
    return false;
  }
  else{
    return true;
  }
};
