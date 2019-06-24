import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-filtration-container',
  templateUrl: './home-filtration-container.component.html',
  styleUrls: ['./home-filtration-container.component.css']
})
export class HomeFiltrationContainerComponent implements OnInit {

  places :any[];
  constructor(private service:HomeService, private userService:AuthLoginService) { }


  ngOnInit() {
    if(this.userService.userlogin){

      let helper = new JwtHelperService();

      let token = this.userService.getUserAuthorizationToken();
      let decodedToken = helper.decodeToken(token);
   
       this.service.getAllPlaces(decodedToken.nameid).subscribe(res=>{
         this.places=res as any[];
         console.log(this.places);
       })
    }
   
  }

  up2Filter(){
    let helper = new JwtHelperService();

    let token = this.userService.getUserAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    this.service.getAllPlaces(decodedToken.nameid).subscribe(res=>{
      
      this.places=res as any[];
      this.places=this.places.filter(r=>r.rate>=2);
      console.log(this.places);
    })
  }

  up4Filter(){
    let helper = new JwtHelperService();

    let token = this.userService.getUserAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    this.service.getAllPlaces(decodedToken.nameid).subscribe(res=>{
      
      this.places=res as any[];
      this.places=this.places.filter(r=>r.rate>=4);
      console.log(this.places);
    })

  }


}
