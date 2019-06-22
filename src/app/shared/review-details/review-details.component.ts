import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  placeId: number;
  reviews: any[];
  constructor(private route:ActivatedRoute, public reviewService: ReviewService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param=>{
      this.placeId=+ param.get('placeId');
      console.log(this.placeId);
    })

    this.reviewService.getAllReviews(this.placeId).subscribe(res=>{
      this.reviews=res as any[];
      console.log(this.reviews);
  })
  }

}
