import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { PlaceDetailsService } from 'src/app/services/place-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class PlaceDetailsComponent implements OnInit {
  constructor(private service:PlaceDetailsService, private router : ActivatedRoute) { }
  reviewNumber: number [] = [1, 2, 3, 4, 5];
  placeId:number;
  place;
  loading:boolean;


  ngOnInit() {
    this.router.paramMap.subscribe(param=>{
    this.placeId=+ param.get('placeId');
    })
    this.service.getPlace(this.placeId).subscribe(res=>{
      this.place=res ;
      this.loading=true;
      console.log(this.place);
    })

  }
  getPlaceInfo(){
    return this.place;
  }

}
