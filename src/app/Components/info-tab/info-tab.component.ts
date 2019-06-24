import { Component, OnInit } from '@angular/core';
import { PlaceDetailsService } from 'src/app/services/place-details.service';
import { ActivatedRoute } from '@angular/router';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { PlaceInfoService } from 'src/app/services/place-info.service';


@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {

  placeId: number;
  place;
  loading: boolean = false;
  constructor(private service : PlaceInfoService, private router:ActivatedRoute, private auth:AuthLoginService) { }


  ngOnInit() {
    this.router.paramMap.subscribe(param=>{
      this.placeId=+ param.get('placeId');
      })
      this.service.getPlaceInfo(this.placeId).subscribe(res=>{
        this.place=res ;
        this.loading=true;
        console.log(this.place);
      })
  }

  placeLoggin(){
    return this.auth.placeLoggedIn();
  }

}
