import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserForm } from './auth';
import { Route, Router } from '@angular/router';

const users: Array<User> = [
  { username: 'Rifqiw', password: 'rifqi160' },
  { username: 'Yoshuy', password: 'batmobile' },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined;
  constructor(private router: Router) {}

  login(form: UserForm) {
    console.log('Form username:', form.username);
    console.log('Form password:', form.password);

    const response = users.find((user) => this.matchUser(user, form));

    console.log('Response:', response);

    if (!response) {
      alert('User is not found!');
    } else {
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['home']);
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
