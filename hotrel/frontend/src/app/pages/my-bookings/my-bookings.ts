import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.html',
  styleUrls: ['./my-bookings.scss']
})
export class MyBookings implements OnInit {
  bookings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/bookings', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).subscribe({
      next: data => this.bookings = data,
      error: err => console.error('Error fetching bookings:', err)
    });
  }
}
