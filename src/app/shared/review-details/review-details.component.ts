import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  placeId: number;
  reviews: any[];
  decodedToken ;
  user;
  constructor(
    private auth:AuthLoginService, 
    private route: ActivatedRoute, 
    public reviewService: ReviewService, 
    private userProfileService: UserProfileService) { }

  ngOnInit() {

    let helper = new JwtHelperService();
    let token = this.auth.getUserAuthorizationToken();
    this.decodedToken = helper.decodeToken(token);

    this.route.paramMap.subscribe(param => {
      this.placeId = + param.get('placeId');
      console.log(this.placeId);
    })

    this.reviewService.getAllReviews(this.placeId).subscribe(res => {
      this.reviews = res as any[];
      console.log(this.reviews);
    })

    this.getUserDetail();
  }
  getUserDetail() {
    this.userProfileService.getUserInfo(this.decodedToken.nameid).subscribe(res => {
      this.user = res;
      // this.loaded = true;
      console.log(this.user);
    })
  }

}
