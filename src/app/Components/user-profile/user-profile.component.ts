import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class UserProfileComponent implements OnInit {
  reviewNumber: number [] = [1, 2, 3, 4, 5];

  constructor(private service:UserProfileService,private auth:AuthLoginService) { }
  info;

  ngOnInit() {
    let helper = new JwtHelperService();
    let token = this.auth.getUserAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    this.service.getUserInfo(decodedToken.nameid).subscribe(res=>{
      this.info=res;
      console.log(this.info);
    })
  }

}
