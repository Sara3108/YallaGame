import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/auth-login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
 UserErrorMsg:boolean;
 PlaceErrorMsg:boolean;
 
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
    this.authService.userlogin(this.getEmail().value, this.getPassword().value)
      .subscribe(result => { 
        // if (result)
          this.router.navigate(['/location']);

      },(err:HttpErrorResponse)=>{
        if(err.status==401){
         console.log('errrrrrrrrrrrrrrrrrrrr')
         this.UserErrorMsg=true;
        }
      });
  }

  PlaceSignIn() {
    this.authService.placelogin(this.getEmail().value, this.getPassword().value)
      .subscribe(result => { 
        // if (result)
          this.router.navigate(['/place-details']);
   
      },(err:HttpErrorResponse)=>{
        if(err.status==401){
         console.log('errrrrrrrrrrrrrrrrrrrr')
         this.PlaceErrorMsg=true;
        }
      });
  }

}
