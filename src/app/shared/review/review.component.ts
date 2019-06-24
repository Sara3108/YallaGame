import { Component, OnInit, Input } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlaceInfoService } from 'src/app/services/place-info.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  date: number = Date.now();
  content= new FormControl();
  user;
  starsCount:number = 0;


  constructor(
    private auth:AuthLoginService, 
    private service:PlaceInfoService,
    private route:ActivatedRoute, 
    private userProfileService: UserProfileService) { }
    decodedToken ;


  ngOnInit() {
    let helper = new JwtHelperService();
    let token = this.auth.getUserAuthorizationToken();
    this.decodedToken = helper.decodeToken(token);
    console.log(this.decodedToken);
    this.getUserDetail();
  }
  addReview(){
    let placeId;
    this.route.paramMap.subscribe(param=>{
      placeId=+ param.get('placeId');
      })
      let helper = new JwtHelperService();
      let token = this.auth.getUserAuthorizationToken();
      let decodedToken = helper.decodeToken(token);
   let review={
      "placeId": placeId,
      "userId": decodedToken.nameid,
      "content": this.content.value,
      "rate": this.starsCount
    }
    this.service.addReview(review).subscribe();
    console.log(review);

}
getUserDetail(){
  this.userProfileService.getUserInfo(this.decodedToken.nameid).subscribe(res=>{
    this.user=res;
    // this.loaded = true;
    console.log(this.user);
  })
}
userLoggin(){
  return this.auth.userLoggedIn();
}
addRating(rating:number){
  this.starsCount = rating;
}


}
