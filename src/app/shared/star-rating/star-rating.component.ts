import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() starsCount:number = 0;
  constructor() { }

  ngOnInit() {
  }
  addRating(rating:number){
    this.starsCount = rating;
  }

}
