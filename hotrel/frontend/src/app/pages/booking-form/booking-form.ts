import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../services/booking';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.html',
})
export class BookingForm {
  booking = {
    guestName: '',
    room: '',
    checkIn: '',
    checkOut: '',
    hotel: ''
  };

  constructor(private route: ActivatedRoute, private bookingService: Booking, private router: Router) {
    this.booking.hotel = this.route.snapshot.params['id'];
  }

  bookHotel() {
    this.bookingService.createBooking(this.booking).subscribe(() => {
      alert('Booking confirmed!');
      this.router.navigate(['/my-bookings']);
    });
  }
}
