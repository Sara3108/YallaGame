import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
places :any[];
  constructor(private service:HomeService, private userService:AuthLoginService) { }


  ngOnInit() {
    let helper = new JwtHelperService();

   let token = this.userService.getUserAuthorizationToken();
   let decodedToken = helper.decodeToken(token);

    this.service.getAllPlaces(decodedToken.nameid).subscribe(res=>{
      this.places=res as any[];
      console.log(this.places);
    })
  }

  // up3Filter(){
  //   this.service.getAllPlaces().subscribe(res=>{
      
  //     this.places=res as any[];
  //     this.places=this.places.filter(r=>r.rate>=2);
  //     console.log(this.places);
  //   })
  // }

  // up5Filter(){
  //   this.service.getAllPlaces().subscribe(res=>{
      
  //     this.places=res as any[];
  //     this.places=this.places.filter(r=>r.rate>=4);
  //     console.log(this.places);
  //   })

  // }


}
