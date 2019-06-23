import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  date: number = Date.now();

  constructor(private auth:AuthLoginService, private service) { }
    decodedToken ;


  ngOnInit() {
    let helper = new JwtHelperService();
    let token = this.auth.getUserAuthorizationToken();
    this.decodedToken = helper.decodeToken(token);
    console.log(this.decodedToken);

  }

}
