import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router dari @angular/router
import { LogoutModalComponent } from '../sidebar/logout-modal/logout-modal.component';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman/pengajuan-pinjaman.service';
import { AdminDetailResponse } from '../pengajuan-pinjaman/pengajuan-pinjaman';

export type AdminsResponse = Admin[];
export interface Admin {
  idAdmin: number;
  nameAdmin: string;
  nppAdmin: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, LogoutModalComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router, // Tambahkan Router ke dalam constructor
    private pengajuanPinjamanService: PengajuanPinjamanService
  ) {} // Buat instance AuthService melalui dependency injection
  
  admin?: AdminDetailResponse;
  showLogoutModal = false;

  ngOnInit() {
    this.refreshAdminDetail();
  }

  logout() {
    this.authService.logout();
  }

  onConfirmed(confirmed: boolean) {
    if (confirmed) {
      this.logout();
      console.log('Action confirmed');
    } else {
      // Cancel the action
      console.log('Action cancelled');
    }
    this.showLogoutModal = false;
  }

  navigateToListPengajuanPinjaman() {
    // Menggunakan Router untuk melakukan navigasi ke path /home
    this.router.navigate(['/pengajuan-pinjaman']);
  }
  navigateToMonitoring() {
    // Menggunakan Router untuk melakukan navigasi ke path /monitoring
    this.router.navigate(['/monitoring']);
  }

  refreshAdminDetail() {
    const idString: string | null = localStorage.getItem('id');
    if (idString === null) {
      // Handle the case where 'id' is not found in localStorage
      console.error('ID not found in localStorage');
    } else {
      const id: number = +idString;
      this.pengajuanPinjamanService.getDetailAdmin(id).subscribe({
        next: (dataAdmin) => {
          this.admin = dataAdmin;
          console.log(this.admin);
        },
        error: (error) => console.error('Error fetching data:', error)
      });
    }
  }
}
