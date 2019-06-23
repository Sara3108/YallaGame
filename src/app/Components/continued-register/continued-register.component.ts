import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordValidation } from '../../validations/validators';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/auth-login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PlaceRegister } from 'src/app/models/place-register';

@Component({
  selector: 'app-continued-register',
  templateUrl: './continued-register.component.html',
  styleUrls: ['./continued-register.component.css']
})
export class ContinuedRegisterComponent implements OnInit {
  users = ["Person", "Place"];
  countries = ['Egypt'];
  cities = ['Ismailia', 'Suez', 'Port-Said', 'Cairo'];
  errMsg: boolean;
  isLoading: boolean = false;

  place: PlaceRegister;

  form: FormGroup;
  secondFormGroup: FormGroup;

  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  fromSelectedDay = this.days[0];
  toSelectedDay = this.days[0];

  openSelectedHour: number = this.hours[0];
  closeSelectedHour: number = this.hours[0];

  constructor(private router: Router,
    private authService: AuthLoginService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      profileImage: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      fromSelectedDay: ['', Validators.required],
      toSelectedDay: ['', Validators.required],
      openSelectedHour: ['', Validators.required],
      closeSelectedHour: ['', Validators.required],
    });

    this.form = this._formBuilder.group({
      user: ['', Validators.required],
      // email: ['', Validators.required, Validators.email],
      email:[''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPwd: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    },
      {
        validators: PasswordValidation.MatchPassword
      });;
  }

  ////// get form controls
  getEmail() {
    return this.form.get('email');
  }

  getUserName() {
    return this.form.get('username');
  }
  getPassword() {
    return this.form.get('password');
  }
  getConfirmPwd() {
    return this.form.get('confirmPwd');
  }
  getUser() {
    return this.form.get('user');
  }
  getPhone() {
    return this.form.get('phone');
  }
  getCountry() {
    return this.form.get('country');
  }
  getCity() {
    return this.form.get('city');
  }
  getProfileImage() {
    return this.secondFormGroup.get('profileImage');
  }
  getDescription() {
    return this.secondFormGroup.get('description');
  }

  ////////////// Error massages
  getErrorMessageEmail() {
    return this.getEmail().hasError('required') ? 'Email is Required' :
      this.getEmail().hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessageUserName() {
    return this.getUserName().hasError('required') ? 'UserName is Required' : '';
  }
  getErrorMessagePwd() {
    return this.getPassword().hasError('required') ? 'Password is Required' : '';
  }
  getErrorMessageCPwd() {
    return this.getConfirmPwd().hasError('required') ? 'Confirm Password is Required' :
      this.getConfirmPwd().hasError('MatchPassword') ? 'must match' : '';
  }
  getErrorMessageUser() {
    return this.getUser().hasError('required') ? 'Must Select the Kind of User' : '';
  }
  getErrorMessageCountry() {
    return this.getCountry().hasError('required') ? 'Please select your country' : '';
  }
  getErrorMessageCity() {
    return this.getCity().hasError('required') ? 'Please select your city' : '';
  }
  getErrorMessagePhone() {
    return this.getPhone().hasError('required') ? 'Phone is required' :
      this.getPhone().hasError('minLength') ||
        this.getPhone().hasError('maxLength') ? '' : 'Phone must be 11 digits';
  }

  getErrorMessageProfileImage() {
    return this.getProfileImage().hasError('required') ? 'Profile image is required' : '';
  }
  getErrorMessageDescription() {
    return this.getDescription().hasError('required') ? 'Please add some details about your place'
      : this.getDescription().hasError('minLength') ? 'Description must be at least 20 character' : ''
  }


  /////// on submit form
  signup() {
    this.isLoading=true;
    this.place = {
      userName: this.getUserName().value,
      email: this.getEmail().value,
      password: this.getPassword().value,
      country: this.getCountry().value,
      city: this.getCity().value,
      phone: this.getPhone().value,
      image: this.getProfileImage().value,
      description: this.getDescription().value,
      days: (this.fromSelectedDay + ' - ' + this.toSelectedDay),
      openHour: `${this.openSelectedHour}`,
      closeHour: `${this.closeSelectedHour}`,
      latitude: 0,
      longitude: 0
    }
    this.isLoading = true;
    this.authService.PlaceRegister(this.place)
      .subscribe(result => {
        // if (result)
        console.log(this.place);
        this.router.navigate(['/login']);
        // else  
      }, (err) => {
        console.log('there is error happen');
        this.isLoading = false;
        if (err.status == 401) {
          console.log('errrrrrrrrrrrrrrrrrrrr 401')
          this.errMsg = true;
        }
      });
  }
}
