import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/auth-login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
 UserErrorMsg:boolean;
 PlaceErrorMsg:boolean;
isLoading:boolean=false;
 
 
  constructor(
    private router: Router, 
    private authService: AuthLoginService) { }




  form= new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('',[Validators.required]),
  })



  getEmail(){
   return this.form.get('email');
  }
  getPassword(){
    return this.form.get('password');
  }
 

  getErrorMessageEmail() {
    return this.getEmail().hasError('required') ? 'Email is Required' :
        // this.getEmail().hasError('email') ? 'Not a Valid Email' :
            '';
  }
  getErrorMessagePwd(){
    return this.getPassword().hasError('required') ? 'Password is Required' :'';
  }

  ngOnInit() {
  }

  UsersignIn() {
    this.isLoading=true;
    this.authService.userlogin(this.getEmail().value, this.getPassword().value)
      .subscribe(result => { 
        // if (result)
          this.router.navigate(['/location']);

      },(err:HttpErrorResponse)=>{
        this.UserErrorMsg=true;
        this.isLoading=false;
        console.log('errrrrrrrrrrrrrrrrrrrr');
      });
  }

  PlaceSignIn() {
    this.isLoading=true;
    let helper = new JwtHelperService();
    let token = this.authService.getPlaceAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    this.authService.placelogin(this.getEmail().value, this.getPassword().value)
      .subscribe(result => { 
        // if (result)
          this.router.navigate(['/place-details',decodedToken.nameid]);
      },(err:HttpErrorResponse)=>{
        this.isLoading=false;
        
         console.log('errrrrrrrrrrrrrrrrrrrr')
         this.PlaceErrorMsg=true;
        
      });
  }

}
