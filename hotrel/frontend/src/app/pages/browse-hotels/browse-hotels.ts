import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '../../services/hotel';
import { HotelCard } from '../../components/hotel-card/hotel-card';
import { Router } from '@angular/router';

@Component({
    selector: 'app-browse-hotels',
    standalone: true,
    imports: [CommonModule, HotelCard],
    templateUrl: './browse-hotels.html',
    styleUrls: ['./browse-hotels.scss']
})
export class BrowseHotels implements OnInit {
    hotels: any[] = [];
    isLoading = true;

    constructor(private hotelService: Hotel, private router: Router) { }

    ngOnInit(): void {
        this.fetchHotels();
    }

    fetchHotels(): void {
        this.isLoading = true;
        this.hotelService.getHotels().subscribe({
            next: (data: any[]) => {
                this.hotels = data;
                this.isLoading = false;
                console.log('Hotels fetched successfully:', data);
            },
            error: (err) => {
                console.error('Error fetching hotels:', err);
                this.isLoading = false;
            }
        });
    }

    goToLogin(): void {
        this.router.navigate(['/login']);
    }

    goToSignup(): void {
        this.router.navigate(['/signup']);
    }
}
