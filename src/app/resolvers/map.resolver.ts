import { Injectable } from '@angular/core';  
import { Resolve } from '@angular/router';  
import { Observable } from 'rxjs';  
import { IData } from '../data.interface';
import { MapService } from '../services/map.service';

@Injectable()
export class MapResolver implements Resolve<IData> {

    constructor(private mapService: MapService) { }

    resolve(): Observable<IData> {  
      return this.mapService.getMarkers();
    }
}