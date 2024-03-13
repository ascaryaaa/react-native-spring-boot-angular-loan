import { Component, signal } from '@angular/core';
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
  constructor(private service: AuthService) {}
  onSubmit(form: NgForm) {
    alert(form.value?.username + form.value?.password);
    if (!form.valid) {
      alert("Please complete the form!");
      return;
    }
    this.service.login(form.value)
  }
}
