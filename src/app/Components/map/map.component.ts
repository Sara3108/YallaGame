import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker';
import { ActivatedRoute } from '@angular/router';
import { PlaceInfoService } from 'src/app/services/place-info.service';
import { Place } from 'src/app/models/place';
import { PlaceDetailsService } from 'src/app/services/place-details.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  placeId: number;
  place: any;
  marker: Marker;

  person_latitude: number;
  person_longitude: number;
  zoom: number;
  loaded: boolean = false;
  lat: number;
  lng: number;

  constructor(private placeInfoService: PlaceDetailsService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.placeId = + param.get('placeId');
    })
    this.placeInfoService.getPlace(this.placeId).subscribe(res => {
      this.place = res;
      this.lat = (this.place.latitude).substring(1, (this.place.latitude).length - 1);
      this.lng = (this.place.longitude).substring(1, (this.place.longitude).length - 1);
      console.log(this.lat, this.lng);
      this.loaded = true;
      this.marker = {
        latitude: this.lat,
        longitude: this.lng
      }
      
    })

    // if (this.loaded == true) {
      
    //   this.marker = {
    //     latitude: this.lat,
    //     longitude: this.lng
    //   }
    // } else {
    //   console.log(this.loaded);
    // }
    // console.log(this.marker);
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
