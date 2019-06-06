import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-info-edit',
  templateUrl: './place-info-edit.component.html',
  styleUrls: ['./place-info-edit.component.css']
})
export class PlaceInfoEditComponent implements OnInit {
  countries=['Egypt'];
  cities=['Ismailia','Suez','Port-Said','Cairo'];

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    placename : new FormControl('',[Validators.required]),
    country: new FormControl(),
    location: new FormControl(),
    workingHours:new FormControl(),
    city:new FormControl(),
    phone : new FormControl(),

  })
  constructor() { }

  getEmail(){
    return this.form.get('email');
  }

  getPlaceName(){
    return this.form.get('placename');
  }
  getLocation(){
    return this.form.get('location');
  }
  getPhone(){
    return this.form.get('phone');
  }
  getWorkHours(){
    return this.form.get('workingHours');
  }
  getCountry(){
    return this.form.get('country');
  }
  getCity(){
    return this.form.get('city');
  }


  getErrorMessageEmail() {
    return this.getEmail().hasError('required') ? 'Email is Required' :
        this.getEmail().hasError('email') ? 'Not a valid email' :
            '';
  } 
  getErrorMessagePlaceName() {
    return this.getPlaceName().hasError('required') ? 'UserName is Required' :'';
  }
  ngOnInit() {
  }

}
