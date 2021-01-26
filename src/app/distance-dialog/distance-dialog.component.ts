import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '../model';

@Component({
  selector: 'distance-dialog',
  templateUrl: './distance-dialog.component.html',
  styleUrls: ['./distance-dialog.component.css']
})
export class DistanceDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
