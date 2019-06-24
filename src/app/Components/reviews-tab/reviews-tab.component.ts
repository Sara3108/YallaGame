import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import { PlaceInfoService } from '../../services/place-info.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-reviews-tab',
  templateUrl: './reviews-tab.component.html',
  styleUrls: ['./reviews-tab.component.css']
})
export class ReviewsTabComponent implements OnInit {
  reviews: any[];
  constructor(private service:PlaceInfoService, private route:ActivatedRoute, private authService:AuthLoginService) { }
  


  ngOnInit() {
    // console.log()

  }

  addReview(){
    let placeId;
    this.route.paramMap.subscribe(param=>{
      placeId=+ param.get('placeId');
      })
      let decodedToken;
      if(this.authService.userLoggedIn){
        let helper = new JwtHelperService();
      let token = this.authService.getUserAuthorizationToken();
       decodedToken = helper.decodeToken(token);
       let review={
        "placeId": placeId,
        "userId": decodedToken.nameid,
        "content": "string",
        "rate": 0
      }
    
      this.service.addReview(review).subscribe();
      }
      
  
  }
  userLogin(){
    return this.authService.userLoggedIn();
  }
}
