import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get fname() {
    return this.registrationForm.get('name');
  }

  get femail() {
    return this.registrationForm.get('email');
  }

  get froomtype() {
    return this.registrationForm.get('roomType');
  }
  get farrivaldate() {
    return this.registrationForm.get('arrivalDate');
  }
  get fdeparturedate() {
    return this.registrationForm.get('departuredate');
  }
  get fnumberofguest() {
    return this.registrationForm.get('numberOfGuest');
  }
  get ffreepickup() {
    return this.registrationForm.get('freePickup');
  }
  get fflightnumber() {
    return this.registrationForm.get('flightNumber');
  }
  get fspecialrequest() {
    return this.registrationForm.get('specialRequest');
  }

  constructor(private fb: FormBuilder) { }
  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.required],
    roomType: ['', Validators.required],
    arrivalDate: ['', Validators.required],
    departureDate: ['', Validators.required],
    numberOfGuest: ['', Validators.required],
    freePickup: ['', Validators.required],
    flightNumber: ['', Validators.required],
    specialRequest: ['', Validators.required]
  });
  // registrationForm=new FormGroup({
  //   name:new FormControl(''),
  //   email:new FormControl(''),
  //   roomType:new FormControl(''),
  //   arrivalDate:new FormControl(''),
  //   departureDate:new FormControl(''),
  //   numberOfGuest:new FormControl(''),
  //   freePickup:new FormControl(''),
  //   FlightNumber:new FormControl(''),
  //   specialRequest:new FormControl(''),

  // });

}
