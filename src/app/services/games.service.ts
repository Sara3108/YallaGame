import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getAllGames(placeId:number){
    return this.http.get('http://localhost:60354/api/GameInPlaces2/findByGame/'+placeId);
  }
}
