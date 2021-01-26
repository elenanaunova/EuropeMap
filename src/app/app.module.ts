import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropeMapComponent } from './europe-map/europe-map.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { CapitalCityData } from './capital-city-data';
import { DistanceDialogComponent } from './distance-dialog/distance-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EuropeMapComponent,
    InfoPanelComponent,
    DistanceDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMZxNTjb6j2rKozv6YfHLzdM7j96ZpHsw',
      libraries: ['geometry']
    }),
    InMemoryWebApiModule.forRoot(CapitalCityData),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
