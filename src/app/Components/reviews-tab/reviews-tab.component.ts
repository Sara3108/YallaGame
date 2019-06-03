import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-tab',
  templateUrl: './reviews-tab.component.html',
  styleUrls: ['./reviews-tab.component.css']
})
export class ReviewsTabComponent implements OnInit {
  reviewNumber: number[] = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
