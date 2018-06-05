import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapDirective implements OnInit {


public map;

  constructor() {
    }
  
  ngOnInit(){
  this.map = this.createMap();
  }
   

  
  createMap(location = new google.maps.LatLng(40.712784, -74.005941)) {
  let mapOption = {
  
  center: location,
  zoom:15,
  mapTypeId: google.maps.MapTypeID.ROADMAP,
  disableDefaultUI: true
  }
  
  let mapEl = document.getElementById('map');
  let map = new google.maps.Map (mapEl, mapOptions);
  
  return map;
  }

}
