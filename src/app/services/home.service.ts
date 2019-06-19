import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }



  getAllPlaces(id: number){
   return this.http.get('http://localhost:60354/api/Places2/GetPlacesbyid/'+id);
  }
}
