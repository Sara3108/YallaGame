import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-star-rating',
  templateUrl: './small-star-rating.component.html',
  styleUrls: ['./small-star-rating.component.css']
})
export class SmallStarRatingComponent implements OnInit {

  @Input() starsCount:number = 0;
  constructor() { }

  ngOnInit() {
  }
  addRating(rating:number){
    this.starsCount = rating;
  }
}
