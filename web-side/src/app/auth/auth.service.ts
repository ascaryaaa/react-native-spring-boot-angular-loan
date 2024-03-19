import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserForm } from './auth';
import { Route, Router } from '@angular/router';
import axios from 'axios';

// const users: Array<User> = [
//   { username: 'Rifqiw', password: 'rifqi160' },
//   { username: 'Yoshuy', password: 'batmobile' },
// ];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined;
  constructor(private router: Router) {}

  async login(form: UserForm) {
    console.log('Form username:', form.username);
    console.log('Form password:', form.password);

    try {
      const response = await axios.post(
        'http://localhost:8083/rest/auth/login-admin',
        {
          username: form.username,
          password: form.password,
        }
      );

      console.log('Response:', response);

      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data));
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
  logout() {
    // Hapus data pengguna dari localStorage atau lakukan operasi logout lainnya
    localStorage.removeItem('user');

    // Setelah itu, arahkan pengguna ke halaman login
    this.router.navigate(['/login']);
  }
}
