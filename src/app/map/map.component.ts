import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; 
import { tileLayer, latLng, marker, icon, Map, circle, polygon } from 'leaflet';
import { MapService } from '../services/map.service';
import { Marker } from '../marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  latitude: number = 48.864716;
  longitude: number = 2.349014;
  
  icon: Object = {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png'
   })
  };

  map: Object = {
    options: {
      layers: [
        tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
        })
      ],
      zoom: 12.5,
      center: latLng(this.latitude, this.longitude)
    },
    layersControl: {
      baseLayers: {
        'Open Carto': tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'}),
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      }
    }
  }

  constructor(private route: ActivatedRoute, private mapService: MapService) { }

  ngOnInit() { 
    this.markers = this.route.snapshot.data['markers'].data;
    console.log(this.markers);
  }

  onMapReady(map: Map): void {
    this.markers.forEach((location, i) => {
      marker([location.latitude, location.longitude], this.icon)
        .bindPopup(`<p><strong>INTERÉS #${location.id}</strong><br> ${location.info}</p>`)
        .bindTooltip(location.title)
        .addTo(map);
    });
  }

}
