import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropeMapComponent } from './europe-map/europe-map.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { CapitalCityData } from './capital-city-data';

@NgModule({
  declarations: [
    AppComponent,
    EuropeMapComponent,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
