import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceInfoService {
  placeId: number;
  place;
  constructor(private http: HttpClient, private router:ActivatedRoute) { }
 


editPlaceInfo(placeId:number, editObj){
 return this.http.put('http://localhost:60354/api/Places2/'+placeId,editObj);
}
getPlaceInfo(placeId:number){
  return this.http.get('http://localhost:60354/api/Places2/'+placeId);

}

}
