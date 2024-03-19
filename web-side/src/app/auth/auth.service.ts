import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { User, UserForm } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined;

  constructor(private router: Router) {}

  async login(form: UserForm): Promise<void> {
    console.log('Form username:', form.username);
    console.log('Form password:', form.password);

    try {
      const response = await axios.post('http://localhost:8083/rest/auth/login-admin', {
        username: form.username,
        password: form.password,
      });

      console.log('Response:', response);

      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['pengajuan-pinjaman']);
      }
    } catch (error) {
      console.error('Login failed!', error);
      alert('User is not found!');
    }
  }

  getAuth(): User | undefined {
    const response = localStorage.getItem('user');
    if (!response) {
      return undefined;
    } else {
      return JSON.parse(response);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // Ensure token is also removed on logout
    this.router.navigate(['/login']);
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
