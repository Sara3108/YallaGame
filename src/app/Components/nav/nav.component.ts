import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service: AuthLoginService, private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    if(this.service.userLoggedIn){
      this.service.Userlogout();
      this.router.navigate(['/']);
    }
    else if(this.service.placeLoggedIn){
      this.service.Placelogout();
      this.router.navigate(['/']);
    }
    

   

  }

}
