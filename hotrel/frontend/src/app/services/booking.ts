import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/dist/types';

@Injectable({ providedIn: 'root' })
export class Booking {
  private baseUrl = 'http://localhost:5000/api/bookings';

  constructor(private http: HttpClient) { }

  // Create a new booking
  createBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, bookingData);
  }

  // Get all bookings
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Optionally: Get bookings by user (if backend supports it)
  getBookingsByUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?user=${userId}`);
  }
}
