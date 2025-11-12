import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel-form.html'
})
export class HotelForm {
  hotel = {
    name: '',
    price: '',
    address: '',
    rooms: '',
    amenities: {
      bathroom: false,
      ac: false,
      wifi: false
    }
  };
  image: File | null = null;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  submitHotel() {
    const formData = new FormData();
    formData.append('name', this.hotel.name);
    formData.append('price', this.hotel.price);
    formData.append('address', this.hotel.address);
    formData.append('rooms', this.hotel.rooms);
    formData.append('amenities[bathroom]', String(this.hotel.amenities.bathroom));
    formData.append('amenities[ac]', String(this.hotel.amenities.ac));
    formData.append('amenities[wifi]', String(this.hotel.amenities.wifi));
    if (this.image) formData.append('image', this.image);

    this.http.post('http://localhost:5000/api/hotels', formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).subscribe({
      next: () => alert('Hotel added successfully!'),
      error: err => console.error('Error adding hotel:', err)
    });
  }
}
