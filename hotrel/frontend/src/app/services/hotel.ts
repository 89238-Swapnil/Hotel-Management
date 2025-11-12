import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/dist/types';

@Injectable({ providedIn: 'root' })
export class Hotel {
  private baseUrl = 'http://localhost:5000/api/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addHotel(hotelData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, hotelData);
  }
}
