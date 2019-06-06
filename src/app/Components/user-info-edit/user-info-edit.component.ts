import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info-edit',
  templateUrl: './user-info-edit.component.html',
  styleUrls: ['./user-info-edit.component.css']
})
export class UserInfoEditComponent implements OnInit {
  countries=['Egypt'];
  cities=['Ismailia','Suez','Port-Said','Cairo'];

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    placename : new FormControl('',[Validators.required]),
    country: new FormControl(),
    city:new FormControl(),
    phone : new FormControl(),

  })
  constructor() { }

  getEmail(){
    return this.form.get('email');
  }

  getUserName(){
    return this.form.get('placename');
  }
  getPhone(){
    return this.form.get('phone');
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
  getErrorMessageUserName() {
    return this.getUserName().hasError('required') ? 'UserName is Required' :'';
  }

  ngOnInit() {
  }

}
