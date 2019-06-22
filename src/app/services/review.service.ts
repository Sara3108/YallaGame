import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getAllReviews(id :number)
  {
     return this.http.get('http://localhost:60354/api/Places2/GetPlaces/'+id);
  }
}
