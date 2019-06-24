import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlaceInfoService } from 'src/app/services/place-info.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  date: number = Date.now();
  content= new FormControl();


  constructor(private auth:AuthLoginService, private service:PlaceInfoService,private route:ActivatedRoute) { }
    decodedToken ;


  ngOnInit() {
    let helper = new JwtHelperService();
    let token = this.auth.getUserAuthorizationToken();
    this.decodedToken = helper.decodeToken(token);
    console.log(this.decodedToken);

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
      "rate": 3
    }
    this.service.addReview(review).subscribe();
    console.log(review);

}
userLoggin(){
  return this.auth.userLoggedIn();
}

}
