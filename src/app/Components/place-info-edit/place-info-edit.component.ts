import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaceInfoService } from 'src/app/services/place-info.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthLoginService } from 'src/app/services/auth-login.service';

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
    days: new FormControl(),
    openHour:new FormControl(),
    closeHour:new FormControl(),
    city:new FormControl(),
    phone : new FormControl(),

  })
  constructor(private service:PlaceInfoService, private authService: AuthLoginService) { }

  getEmail(){
    return this.form.get('email');
  }

  getPlaceName(){
    return this.form.get('placename');
  }
  getDays(){
    return this.form.get('days');
  }
  getPhone(){
    return this.form.get('phone');
  }
  getOpenHour(){
    return this.form.get('openHour');
  }
  getCloseHour(){
    return this.form.get('closeHour');
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
  editInfo(){
    let edits={
  "name": this.getPlaceName().value,
  "phone": this.getPhone().value,
  "country": this.getCountry().value,
  "city": this.getCity().value,
  "email": this.getEmail(),
  // "days": "string",
  // "latitude": 0,
  // "longitude": 0,
  "openHour": this.getOpenHour().value,
  "closeHour": this.getCloseHour().value,
    }
 
    let helper = new JwtHelperService();
    let token = this.authService.getPlaceAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    this.service.editPlaceInfo(decodedToken.nameid,edits).subscribe();
  }

}
