import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from '../../../../node_modules/rxjs/dist/types/operators';
//import { HotelForm } from '../../pages/hotel-form/hotel-form';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {
  hotels: any[] = [];
  objectKeys = Object.keys;
  isHotelListRoute = true; // ✅ Add this line

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchHotels();
    this.trackRoute();
  }

  fetchHotels(): void {
    this.http.get<any[]>('http://localhost:5000/api/hotels', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).subscribe({
      next: (data) => this.hotels = data,
      error: (err) => console.error('Error fetching hotels:', err)
    });
  }

  trackRoute(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.isHotelListRoute = url === '/dashboard' || url === '/dashboard/hotels';
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

  amenityIcons: { [key: string]: { icon: string; label: string } } = {
    bathroom: { icon: 'fa-bath', label: 'Bathroom' },
    ac: { icon: 'fa-snowflake', label: 'AC' },
    wifi: { icon: 'fa-wifi', label: 'WiFi' }
  };

  getHotelImage(hotel: any): string {
    if (!hotel?.image) {
      return 'https://via.placeholder.com/400x200?text=No+Image';
    }
    // If image path starts with /uploads, prepend backend URL
    if (hotel.image.startsWith('/uploads') || hotel.image.startsWith('/upload')) {
      return `http://localhost:5000${hotel.image}`;
    }
    // Otherwise return as is (in case it's already a full URL)
    return hotel.image;
  }
}
