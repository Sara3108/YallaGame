import { Component, OnInit, ViewEncapsulation, Sanitizer } from '@angular/core';
import { PlaceDetailsService } from 'src/app/services/place-details.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PlaceDetailsComponent implements OnInit {
  constructor(
    private service: PlaceDetailsService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder
  ) { }
  reviewNumber: number[] = [1, 2, 3, 4, 5];
  placeId: number;
  place;
  loading: boolean;
  ImageUrl: string;
  isImageFeatched: boolean = false;

  updateFormGroup: FormGroup;

  ngOnInit() {
    this.router.paramMap.subscribe(param => {
      this.placeId = + param.get('placeId');
    })
    this.service.getPlace(this.placeId).subscribe(res => {
      this.place = res;
      this.loading = true;
      // if (this.place.image.value != " " ) {
      //   console.log("testststst", this.place.image);
        this.isImageFeatched = true;
      // }
      // console.log(this.place);
      // this.ImageUrl = this.getImageUrl(this.place.image);
    })

    this.updateFormGroup = this._formBuilder.group({
      profileImage: ['', Validators.required],
    });
  }

  getImageUrl(image: string) {
    // console.log(image);
    if (image != 'undefined') {
      return this.sanitizer.bypassSecurityTrustUrl(image);
    }
  }
  getPlaceInfo() {
    return this.place;
  }

  uploadImage(event) {
    console.log(event);
  }


  getProfileImage() {
    console.log(this.updateFormGroup.get('profileImage').value);
    return this.updateFormGroup.get('profileImage');
  }

  getErrorMessageProfileImage() {
    return this.getProfileImage().hasError('required') ? 'Profile image is required' : '';
  }

}
