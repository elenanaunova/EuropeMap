import { Component, OnInit } from '@angular/core';
import { CapitalCity } from '../model';
import { DataService } from '../data-service.service';

import * as cities from '../../assets/capitalCities.json';

@Component({
  selector: 'info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  correctCities: number;
  kilometersLeft: number;
  cityToGuess: CapitalCity;
  capitalCities: CapitalCity[];

  constructor(private dataService: DataService) { 
    this.correctCities = 0;
    this.kilometersLeft = 1500;
  }

  ngOnInit(): void {
    this.pickRandomCity();
  }

  pickRandomCity(): void {
    if(!this.capitalCities || this.capitalCities.length == 0){
      this.capitalCities = cities.capitalCities;
    }
    const random = Math.floor(Math.random() * this.capitalCities.length);
    let cityName = this.capitalCities[random].capitalCity;
    this.capitalCities = this.capitalCities.filter(x => x.capitalCity != cityName);
    this.getCityCoordinates(cityName);
  }

  getCityCoordinates(cityName: string) {
    return this.dataService.getCity(cityName).subscribe((data) => {
      this.cityToGuess = data;
    });
  }
}
