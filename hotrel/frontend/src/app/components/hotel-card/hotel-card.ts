import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-card.html',
})
export class HotelCard {
  @Input() hotel: any;

  get hotelImage(): string {
    if (!this.hotel?.image) {
      return 'https://via.placeholder.com/400x200?text=No+Image';
    }
    // If image path starts with /uploads, prepend backend URL
    if (this.hotel.image.startsWith('/uploads') || this.hotel.image.startsWith('/upload')) {
      return `http://localhost:5000${this.hotel.image}`;
    }
    // Otherwise return as is (in case it's already a full URL)
    return this.hotel.image;
  }
}
