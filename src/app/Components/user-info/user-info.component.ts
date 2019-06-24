import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private service:UserProfileService,private auth:AuthLoginService) { }
  info;
  loaded:boolean=false;

  ngOnInit() {
    if(this.auth.userLoggedIn){
      let helper = new JwtHelperService();
      let token = this.auth.getUserAuthorizationToken();
      let decodedToken = helper.decodeToken(token);
      this.service.getUserInfo(decodedToken.nameid).subscribe(res=>{
        this.info=res;
        console.log(this.info);
        this.loaded=true;
      })
    }
  
  }

}
