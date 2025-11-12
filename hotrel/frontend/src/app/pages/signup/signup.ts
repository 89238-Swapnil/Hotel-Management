import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
})
export class Signup implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.http.post<{ token: string }>('http://localhost:5000/api/auth/signup', this.form.value)
      .subscribe({
        next: res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        },
        error: err => alert(err.error.message || 'Signup failed')
      });
  }
}
