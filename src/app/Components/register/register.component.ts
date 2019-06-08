import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidation } from '../../validations/validators';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/auth-login.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
users=["Person","Place"];
countries=['Egypt'];
cities=['Ismailia','Suez','Port-Said','Cairo'];
errMsg:boolean;
  constructor( private router: Router, 
    private authService: AuthLoginService) { }

  /// form declaration
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPwd : new FormControl('',[Validators.required]),
    country: new FormControl(),
    city:new FormControl(),
    phone : new FormControl('',[Validators.minLength(11),Validators.maxLength(11)]),
    user: new FormControl('',[Validators.required])

  },{
    validators: PasswordValidation.MatchPassword
  })
  
 ////// get form controls
  getEmail(){
    return this.form.get('email');
  }

  getUserName(){
    return this.form.get('username');
  }
  getPassword(){
    return this.form.get('password');
  }
  getConfirmPwd(){
    return this.form.get('confirmPwd');
  }
  getUser(){
    return this.form.get('user');
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

  ////////////// Error massages
  getErrorMessageEmail() {
    return this.getEmail().hasError('required') ? 'Email is Required' :
        this.getEmail().hasError('email') ? 'Not a valid email' :
            '';
  } 
  getErrorMessageUserName() {
    return this.getUserName().hasError('required') ? 'UserName is Required' :'';
  }
  getErrorMessagePwd(){
    return this.getPassword().hasError('required') ? 'Password is Required' :'';
  }
  getErrorMessageCPwd(){
    return this.getConfirmPwd().hasError('required') ? 'Confirm Password is Required' :
    this.getConfirmPwd().hasError('MatchPassword')?'must match':'';
  }
  getErrorMessageUser(){
    return this.getUser().hasError('required') ? 'Must Select the Kind of User' :'';
  }
  getErrorMessagePhone() {
    return this.getPhone().hasError('minLength')||
    this.getPhone().hasError('maxLength') ? 'Phone must be 11 digits' : '';
  }
  
  
  /////// on submit form
  signup(){
  

    if(this.getUser().value=='Person'){
      this.authService.userRegister(this.getEmail().value, this.getPassword().value,
      this.getEmail().value,this.getCountry().value,this.getCity().value, this.getPhone().value)
       .subscribe(result => { 
         // if (result)
           this.router.navigate(['/']);
         // else  
       },(err)=>{
        console.log('there is error happen');
         
         if(err.status==401){
          console.log('errrrrrrrrrrrrrrrrrrrr 401')
          this.errMsg=true;
         }
        
       });
    }
    else if(this.getUser().value=='Place'){
      this.authService.PlaceRegister(this.getUserName().value, this.getPassword().value,
      this.getEmail().value,this.getCountry().value,this.getCity().value, this.getPhone().value)
       .subscribe(result => { 
         // if (result)
           this.router.navigate(['/']);
        
        },(err:HttpErrorResponse)=>{
          if(err.status==401){
           console.log('errrrrrrrrrrrrrrrrrrrr')
           this.errMsg=true;
          }
       });
    }

   
  }


  ngOnInit() {
  }

}
