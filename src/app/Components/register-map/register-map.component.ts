// / <reference types="@types/googlemaps" /> 

import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register-map',
  templateUrl: './register-map.component.html',
  styleUrls: ['./register-map.component.css']
})


export class RegisterMapComponent implements OnInit {


  markers: marker[] = []
  @Input() searchValue: string = "";

  constructor() {
    // console.log(`search value from ctor ${this.searchValue}`);
  }

  ngOnInit() {
    // console.log(this.initMap());
    // console.log(this.getGeoLocation("Cairo"));
    // console.log(`search value from onInint ${this.searchValue}`);

    // $(document).ready(function() {
    //   $('#geo').on('click', function() {
    //     var geocoder = new google.maps.Geocoder();
    //     var address = document.getElementById('address').value;
    //     geocoder.geocode( { 'address': address}, function(results, status) {
    //       if (status == google.maps.GeocoderStatus.OK) {
    //         console.log(results[0].geometry.location.lat())
    //         console.log(results[0].geometry.location.lng())
    //       } else {
    //       alert('Geocode was not successful for the following reason: ' + status);
    //       }
    //     });
    //   })

    // })
  }

  // initMap() {
  //   this.getGeoLocation("cairo");
  // }

  // getGeoLocation(address: string): Observable < any > {
  //   console.log('Getting address: ', address);
  //   let geocoder = new google.maps.Geocoder();
  //   // let geocoder = new window.google.maps.Geocoder();
  //   return Observable.create(observer => {
  //     geocoder.geocode({
  //       'address': address
  //     }, (results, status) => {
  //       if (status == google.maps.GeocoderStatus.OK) {
  //         observer.next(results[0].geometry.location);
  //         observer.complete();
  //       } else {
  //         console.log('Error: ', results, ' & Status: ', status);
  //         observer.error();
  //       }
  //     });
  //   });
  // }
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  // clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }

  mapClicked($event: MouseEvent) {
    this.markers = [];
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    console.log(this.markers[0]);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    m.lat = $event.coords.lat;
    m.lng = $event.coords.lng;
    console.log('dragEnd', m, $event);
  }




}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}