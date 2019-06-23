import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getAllReviews(id :number)
  {
     return this.http.get('http://localhost:60354/api/ReviewPlaces2/GetReviewsByPlace/'+id);
  }

  getOnlineUsers(Userid){
    return this.http.get('http://localhost:60354/api/Users2/getAllOnlineUsers/'+Userid);
   }
 
}
