import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
error: any;
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

    this.service.login(form.value)
      .then(() => {
      })
      .catch((error: any) => {
        if (error === 'Unauthorized') {
          this.passwordError = 'Password tidak sesuai';
        } else if (error === 'UserNotFound') {
          this.usernameError = 'Username belum terdaftar';
        } else {
          console.log('Terjadi kesalahan saat login. Silakan coba lagi.');
        }
      });
  }
}
