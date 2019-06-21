import { Injectable } from '@angular/core';
import { PlaceDetailsService } from './place-details.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceInfoService {
  placeId: number;
  place;
  constructor(private service : PlaceDetailsService, private router:ActivatedRoute) { }
  getPlaceInfo(){
    this.router.paramMap.subscribe(param=>{
      this.placeId=+ param.get('placeId');
      })
      this.service.getPlace(this.placeId).subscribe(res=>{
        this.place=res ;
      })
  }


editPlaceInfo(){
  
}

}
