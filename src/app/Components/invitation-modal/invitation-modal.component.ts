import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-invitation-modal',
  templateUrl: './invitation-modal.component.html',
  styleUrls: ['./invitation-modal.component.css']
})
export class InvitationModalComponent implements OnInit {

  constructor(private service:ReviewService,private authService:AuthLoginService) { }

  onlineUsers:any[];
  ngOnInit() {
    let helper = new JwtHelperService();
    let token = this.authService.getUserAuthorizationToken();
    let decodedToken = helper.decodeToken(token);
    this.service.getOnlineUsers(decodedToken.nameid).subscribe(res=>{
      this.onlineUsers= res as any[];
      console.log("ONLINE USERS   "+this.onlineUsers);
    })
  }



}
