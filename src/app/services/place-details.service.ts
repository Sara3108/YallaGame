import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceDetailsService {

  constructor(private http:HttpClient) { }

  getPlace(placeId:number){
    return this.http.get('http://localhost:60354//api/Places2/'+placeId);
  }

}
