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
<<<<<<< HEAD
        const response = await axios.post("http://localhost:8081/rest/auth/login-admin", {
            username: form.username,
            password: form.password
        });
=======
      const response = await axios.post(
        'http://localhost:8083/rest/auth/login-admin',
        {
          username: form.username,
          password: form.password,
        }
      );
>>>>>>> 842c699d570486571ea4c8e0beaf7a08506ab710

      console.log('Response:', response);

      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data));
        this.router.navigate(['home']);
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

  private matchUser(user: User, form: UserForm): boolean {
    // Mengubah nilai username dan password menjadi huruf kecil sebelum membandingkan
    const usernameLower = user.username.toLowerCase();
    const passwordLower = user.password.toLowerCase();

    // Mengubah nilai username dan password dari form menjadi huruf kecil sebelum membandingkan
    const formUsernameLower = form.username.toLowerCase();
    const formPasswordLower = form.password.toLowerCase();
    // Membandingkan nilai yang telah diubah menjadi huruf kecil
    return (
      usernameLower === formUsernameLower && passwordLower === formPasswordLower
    );
  }
}
