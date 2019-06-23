import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUserInfo(userId){
    return this.http.get('http://localhost:60354/api/Users2/'+userId);
  }

  getUserReviews(userId){
    return this.http.get('http://localhost:60354/api/ReviewUsers2/GetReviewsByUser/'+userId);
  }
  addReview(review){
    return this.http.post('http://localhost:60354/api/ReviewUsers2',review);
  }
}
