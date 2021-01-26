import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropeMapComponent } from './europe-map/europe-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EuropeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMZxNTjb6j2rKozv6YfHLzdM7j96ZpHsw'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
