import { Component, OnInit, ViewEncapsulation, Sanitizer } from '@angular/core';
import { PlaceDetailsService } from 'src/app/services/place-details.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PlaceDetailsComponent implements OnInit {
  constructor(private service: PlaceDetailsService, private router: ActivatedRoute, private sanitizer: DomSanitizer) { }
  reviewNumber: number[] = [1, 2, 3, 4, 5];
  placeId: number;
  place;
  loading: boolean;
  ImageUrl: string; 
  isImageFeatched: boolean = false;

  ngOnInit() {
    this.router.paramMap.subscribe(param => {
      this.placeId = + param.get('placeId');
    })
    this.service.getPlace(this.placeId).subscribe(res => {
      this.place = res;
      this.loading = true;
      // console.log(this.place);
      // this.ImageUrl = this.getImageUrl(this.place.image);
      this.isImageFeatched = true;
    })
  }

  getImageUrl(image: string) {
    // console.log(image);
    if (image != 'undefined'){
      return this.sanitizer.bypassSecurityTrustUrl(image);
    }
  }
  getPlaceInfo() {
    return this.place;
  }

  uploadImage(event) {
    console.log(event);
  }

}
