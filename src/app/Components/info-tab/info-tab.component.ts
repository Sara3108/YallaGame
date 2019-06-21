import { Component, OnInit } from '@angular/core';
import { PlaceDetailsService } from 'src/app/services/place-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {

  placeId: number;
  place;
  loading: boolean;
  constructor(private service : PlaceDetailsService, private router:ActivatedRoute) { }


  ngOnInit() {
    this.router.paramMap.subscribe(param=>{
      this.placeId=+ param.get('placeId');
      })
      this.service.getPlace(this.placeId).subscribe(res=>{
        this.place=res ;
        this.loading=true;
      })
  }

}
