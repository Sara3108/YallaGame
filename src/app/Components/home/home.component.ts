import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
places :any[];
  constructor(private service:HomeService) { }


  ngOnInit() {
    this.service.getAllPlaces().subscribe(res=>{
      this.places=res as any[];
      console.log(this.places);
    })
  }

}
