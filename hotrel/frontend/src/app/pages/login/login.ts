import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.http.post<{ token: string }>('http://localhost:5000/api/auth/login', this.form.value)
      .subscribe({
        next: res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: err => alert(err.error.message || 'Login failed')
      });
  }
}
