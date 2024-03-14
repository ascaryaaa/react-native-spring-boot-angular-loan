import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { CommonModule } from '@angular/common';

export type AdminsResponse = Admin[]
export interface Admin {
  idAdmin: number
  nameAdmin: string
  nppAdmin: string
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService) {} // Buat instance AuthService melalui dependency injection

  logout() {
    this.authService.logout();
  }

  admins:AdminsResponse = [] 
  async fetchAdminDataAsync(url: string): Promise<AdminsResponse> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: AdminsResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Fetching error:', error);
      throw error;
    }
  }

  apiUrl = 'http://localhost:8081/loan/v1/admin/get-admins';
  async ngOnInit(){
  this.refreshAdminList()
  }

  async refreshAdminList(){
    try {
      this.admins = await this.fetchAdminDataAsync(this.apiUrl);
      console.log(this.admins); // Process your users here
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}