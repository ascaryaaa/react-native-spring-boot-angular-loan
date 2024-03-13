import { Component } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // constructor(private authService: AuthService) {} // Buat instance AuthService melalui dependency injection
  // logout() {
  //   this.authService.logout();
  // }
}
