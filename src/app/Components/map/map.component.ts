import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  Marker: Marker[] = [
    {
      latitude: 30.0011501,
      longitude: 30.051661200000002
    },
    {
      latitude: 30.6011501,
      longitude: 30.551661200000002
    },
    {
      latitude: 30.6011501,
      longitude: 31.851661200000002
    },
    {
      latitude: 30.6011501,
      longitude: 30.851661200000002
    },
  ];

  person_latitude: number;
  person_longitude: number;
  zoom:number;
  constructor() { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.person_latitude = position.coords.latitude;
        this.person_longitude = position.coords.longitude;
        this.zoom = 18;
        // console.log(this.person_latitude, this.person_longitude);
      });
    }
  }
}
