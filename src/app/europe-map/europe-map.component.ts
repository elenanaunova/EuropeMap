import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})
export class EuropeMapComponent implements OnInit{

  map: google.maps.Map;
  markers: marker[] = [];
  mapClickListener: google.maps.MapsEventListener;
  customStyle: {}[] = [
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
   {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
];

  zoom: number = 4;
  
  // initial center position for the map
  lat: number = 56.525961;
  lng: number = 15.255119;

  //europe border restrictions
  europeRestriction = {
      latLngBounds: {
        east: 74.3555,
        north: 82.167391,
        south: -34.5428,
        west: -31.4648
      },
      strictBounds: true
  };

  constructor(private zone: NgZone) {}

  ngOnInit() {
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        let selectedLocation: marker= {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        };
        this.markers.push(selectedLocation);
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }
}

export interface marker {
  lat: number;
	lng: number;
}
