import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { User, UserForm } from './auth';
import { loginAdmin } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined;

  constructor(private router: Router) {}

  async login(form: UserForm): Promise<void> {
    try {
      const response = await axios.post(loginAdmin, {
        username: form.username,
        password: form.password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('hashedId', response.data.hashedId);
      this.router.navigate(['pengajuan-pinjaman/list']);
      return Promise.resolve();
    } catch (error: any) {
      console.error('Login failed!', error);
      if (error.response && error.response.status === 401) {
        return Promise.reject('Unauthorized');
      } else if (error.response && error.response.status === 400) {
        return Promise.reject('UserNotFound');
      } else {
        return Promise.reject('ServerError');
      }
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
    localStorage.removeItem('token');
    localStorage.removeItem('hashedId');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getHashedId(): string | null {
    return localStorage.getItem('hashedId');
  }
}
