import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Navbar } from './components/navbar/navbar';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    
    <router-outlet></router-outlet>
  `,
})
export class App {
  constructor(public router: Router) { }
}
