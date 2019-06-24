import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(private auth:AuthLoginService) { }

  ngOnInit() {
  }
  placeLoggin(){
    return this.auth.placeLoggedIn();
  }

}
