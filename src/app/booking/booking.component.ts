import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  bookingForm !: FormGroup;
  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }


    constructor(private configService : ConfigService,private fb : FormBuilder,private bookingService : BookingService,private route : ActivatedRoute) {
      const roomId = this.route.snapshot.params['roomId'];
      console.log(roomId);
      this.bookingForm = this.fb.group({
        bookingId: new FormControl(""),
        roomId: [{value: roomId, disabled: true}],
        guestEmail: ['',[Validators.required,Validators.email]],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: ['',[CustomValidator.ValidateName]],
        adress: this.fb.group({
          guestAddress: ['',[Validators.required]],
        guestCity:  [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
        }),
        guests: this.fb.array([fb.group({guestName: ['',[Validators.required,CustomValidator.ValidateName,CustomValidator.ValidateSpecialChar("a")]], guestEmail: [''], mobileNumber: ['']})])
      },{validators: [CustomValidator.ValidateDate]})
      this.getBooking();
      this.bookingForm.valueChanges.pipe(exhaustMap((data)=>this.bookingService.bookRoom(data))).subscribe((data)=>console.log(data));

    }
    getBooking(){
      this.bookingForm.patchValue({
        bookingId: 1,
        guestEmail: 'osbaran10@gmail.com',
        checkinDate: '',
        checkoutDate: '',
      });
    }
    addBooking(){
      console.log(this.bookingForm.getRawValue());
    }
    addGuest(){
      this.guests.push(this.fb.group({guestName: [''], guestEmail: [''], mobileNumber: ['']}))
    }
    addPassport(){
      this.bookingForm.addControl('passport',new FormControl(""))
    }
    deletePassport(){
      if(this.bookingForm.get('passport')){
        this.bookingForm.removeControl('passport');
      }
    }
    deleteGuest(i:number){
      this.guests.removeAt(i);
    }
}
