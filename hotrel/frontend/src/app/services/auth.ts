import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }

  signup(userData: any) {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
