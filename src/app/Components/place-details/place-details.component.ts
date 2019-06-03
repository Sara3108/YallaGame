import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class PlaceDetailsComponent implements OnInit {
  reviewNumber: number[] = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

}
