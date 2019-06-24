import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() starsCount:number = 0;
  @Output() stars: number;
  constructor() { }

  ngOnInit() {
  }
  addRating(rating:number){
    this.starsCount = rating;
    this.stars = rating;
  }

}
