import { Component, NgZone, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { marker, CapitalCity } from '../model';

@Component({
  selector: 'europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})
export class EuropeMapComponent implements OnChanges{
  
  @Input()
  cityToGuess: CapitalCity;

  @Output()
  sendMissedDistance = new EventEmitter<number>();

  map: google.maps.Map;
  markers: marker[] = [];
  selectedLocation: marker
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

  ngOnChanges(changes: SimpleChanges) {
    this.markers = [];
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        this.selectedLocation= {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        };
        this.markers.push(this.selectedLocation);
        this.calculateDistance();
      });
    });
  }

  showCorrectLocation() {
    this.markers.push({
      lat: parseFloat(this.cityToGuess.lat),
      lng: parseFloat(this.cityToGuess.long)
    });
  }

  calculateDistance() {
    this.showCorrectLocation();
    let guessedLocation = new google.maps.LatLng(this.selectedLocation.lat, this.selectedLocation.lng);
    let rightLocation = new google.maps.LatLng(parseFloat(this.cityToGuess.lat), parseFloat(this.cityToGuess.long));
    let distance = google.maps.geometry.spherical.computeDistanceBetween(guessedLocation, rightLocation)/1000;
    this.sendMissedDistance.emit(Math.round(distance));
  }

  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }
}

