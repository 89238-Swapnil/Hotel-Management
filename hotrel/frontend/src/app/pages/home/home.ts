import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {

  constructor(private router: Router) { }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  browsehHotels(): void {
    this.router.navigate(['/browse-hotels']);
  }
}
