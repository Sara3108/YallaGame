import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../../services/auth-login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  Country=['Egypt'];
  cities=['Ismailia','Suez','Port-Said','Cairo'];
  
  form= new FormGroup({
    Country : new FormControl('', [Validators.required]),
    City : new FormControl('',[Validators.required]),
  })


  getCountry(){
   return this.form.get('Country');
  }
  getCity(){
    return this.form.get('City');
  }

  getErrorMessageCountry() {
    return this.getCountry().hasError('required') ? 'Country is Required' :
        // this.getEmail().hasError('email') ? 'Not a Valid Email' :
            '';
  }
  getErrorMessageCity(){
    return this.getCity().hasError('required') ? 'City is Required' :'';
  }

  constructor(private service: AuthLoginService, private router: Router, private http: HttpClient) { }



  logOut(){
    this.service.logout();
    this.router.navigate(['/']);
  }

  FindPlaces(){
    let helper = new JwtHelperService();
    let token = localStorage.getItem('currentUser');
    let decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    this.service.findPlaces(this.getCity().value,decodedToken.nameid);
    this.router.navigate(['/home']);
  }




  

  ngOnInit() {
  }

}
