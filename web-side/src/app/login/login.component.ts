import { Component, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage : string ='Silakan input username dan password';
  usernameError : string='';
  passwordError : string='';
  authService: any;
  constructor(private service: AuthService) {}
  onSubmit(form: NgForm) {
    this.usernameError = '';
    this.passwordError = '';
    if (!form.valid) {
      if (form.controls['username'].errors?.['required']) {
        this.usernameError = 'Username harus diisi.';
      }
      if (form.controls['password'].errors?.['required']) {
        this.passwordError = 'Password harus diisi.';
      }
      return;
    }
    // Additional validation logic can be added here
    this.service.login(form.value);
    const { username, password } = form.value;

  //   this.authService.login(username,password)
  //     .pipe(
  //       catchError(error => {
  //         if (error.status === 401) {
  //           this.errorMessage = 'Username atau password salah.';
  //         } else {
  //           this.errorMessage = 'Terjadi kesalahan saat login. Silakan coba lagi.';
  //         }
  //         throw error; // Re-throw the error to propagate it further
  //       })
  //     )
  // }
  axios.post('http://localhost:8083/rest/auth/login-admin', { username, password })
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.id);
        // Redirect or handle successful login
      })
      .catch(error => {
        console.error('Login failed!', error);
        if (error.response && error.response.status === 401) {
          this.passwordError = 'Password tidak sesuai'; // You can customize the error message as needed
        }
        if (error.response && error.response.status === 400) {
          this.usernameError = 'Username belum teregistrasi';
        } else {
          console.log('Terjadi kesalahan saat login. Silakan coba lagi.');
        }
      });
  }
}
