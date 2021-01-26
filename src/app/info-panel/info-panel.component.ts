import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CapitalCity, DialogData } from '../model';
import { DataService } from '../data-service.service';
import { DistanceDialogComponent } from '../distance-dialog/distance-dialog.component';

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
  dialogData: DialogData;

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router) { 
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

  calculatePoints(pointsToDeduct: number) {
    if (pointsToDeduct <= 50) {
      this.correctCities += 1;
    }
    this.setDialogData(pointsToDeduct);
    this.kilometersLeft -= pointsToDeduct;
    this.dialog.open(DistanceDialogComponent, {
      data: this.dialogData
    });
    setTimeout(() => {
      this.dialog.closeAll();
      if (this.kilometersLeft <= 0) {
        this.router.navigate(['/leader-board', this.correctCities]);
      } else {
        this.pickRandomCity();
      }
    }, 1000);    
  }

  setDialogData(pointsToDeduct: number) {
    if (pointsToDeduct <= 50) {
      this.dialogData = {
        title: 'Correct!',
        content: 'You are in 50km radius. Missed by ' + pointsToDeduct + ' kilometeres!'
      };
    } else {
      this.dialogData = {
        title: 'Sorry!',
        content: 'You missed by ' + pointsToDeduct + ' kilometeres!'
      };
    }
  }

}
