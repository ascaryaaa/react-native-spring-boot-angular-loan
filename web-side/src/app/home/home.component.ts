import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, CommonModule, DetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {} // Injeksi Router

  navigateToDetail() {
    // Menggunakan Router untuk melakukan navigasi ke path /detail
    this.router.navigate(['/detail']);
  }
}
