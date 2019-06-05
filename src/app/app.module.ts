import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapResolver } from './resolvers/map.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent, resolve: { markers: MapResolver } }
    ]),
    LeafletModule.forRoot()
  ],
  providers: [
    MapResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
