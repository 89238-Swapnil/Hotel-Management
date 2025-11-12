import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { HotelForm } from './pages/hotel-form/hotel-form';
import { BookingForm } from './pages/booking-form/booking-form';
import { MyBookings } from './pages/my-bookings/my-bookings';
import { BrowseHotels } from './pages/browse-hotels/browse-hotels';
import { AuthGuard } from './guard/auth';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'browse-hotels', component: BrowseHotels, title: 'Browse Hotels' },
    { path: 'login', component: Login, title: 'Login' },
    { path: 'signup', component: Signup, title: 'Signup' },
    { path: 'add-hotel', component: HotelForm, title: 'Add Hotel' },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'add-hotel', pathMatch: 'full' },
            //{ path: 'add-hotel', component: HotelForm, title: 'Add Hotel' },
            { path: 'my-bookings', component: MyBookings, title: 'My Bookings' }
        ]
    },
    { path: 'book/:id', component: BookingForm, title: 'Book Hotel' }
];

