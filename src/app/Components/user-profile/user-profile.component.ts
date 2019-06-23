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

  constructor(private service:UserProfileService, private authService:AuthLoginService) { }

  ngOnInit() {
    let helper = new JwtHelperService();
    let token = this.authService.getUserAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    let review={
      "userId": decodedToken.nameid,
      "reviewerId": 0,
      "content": "string",
      "rate": 0,

    }
    this.service.getUserInfo(review)
  }

}
