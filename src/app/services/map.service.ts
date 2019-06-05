import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from '../data.interface';
import { API_URL } from '../global/url';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  //endpoint: string = 'http://0d814013.ngrok.io/api/v1/markers';
  endpoint: string = API_URL;

  constructor(private http: HttpClient) { }

  getMarkers(): Observable<IData> {
    return this.http.get<IData>(this.endpoint);
  }

}
